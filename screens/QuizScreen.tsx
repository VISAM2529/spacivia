import { View, Text, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';
import { Container } from 'components/Container';
import Header from 'components/ui/Header';
import Button from '../components/ui/Button';
import { quizQuestions } from '../data/mockData';
import { ChevronLeftIcon, ChevronRightIcon, CheckCircleIcon } from 'react-native-heroicons/outline';
import * as Progress from 'react-native-progress';
import SafeAreaView from 'react-native-safe-area-view';
import { useState } from 'react';

const { width } = Dimensions.get('window');

export default function QuizScreen({ navigation }: any) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const question = quizQuestions[currentQuestion];
  const progress = (currentQuestion + 1) / quizQuestions.length;
  const selectedAnswer = answers[question.id];

  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const goNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz completed
      console.log('Quiz completed with answers:', answers);
      navigation.navigate('QuizResults', { answers });
    }
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else {
      navigation.goBack();
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }} forceInset={{ top: 'always' }}>
      <Header 
        showSearch={false} 
        showNotifications={false}
      />
      
      <View className="flex-1">
        {/* Professional Progress Section */}
        <View className="px-6 py-4 bg-white border-b border-neutral-100">
          <View className="mb-3">
            <Progress.Bar 
              progress={progress} 
              width={width - 48} 
              height={8} 
              color="#a87f5a" 
              unfilledColor="#f3f4f6"
              borderWidth={0}
              borderRadius={4}
            />
          </View>
          
          <View className="flex-row justify-between items-center">
            <View>
              <Text className="text-sm font-medium text-neutral-900">
                Question {currentQuestion + 1} of {quizQuestions.length}
              </Text>
              <Text className="text-xs text-neutral-500 mt-0.5">
                Style Discovery Quiz
              </Text>
            </View>
            <View className="bg-primary-50 px-3 py-1.5 rounded-lg">
              <Text className="text-primary-700 text-sm font-medium">
                {Math.round(progress * 100)}% Complete
              </Text>
            </View>
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} className="flex-1 bg-neutral-50">
          {/* Question Section */}
          <View className="px-6 pt-6 pb-4">
            <Text className="text-xl font-semibold text-neutral-900 mb-3 leading-relaxed">
              {question.question}
            </Text>
            <Text className="text-neutral-600 text-base">
              Choose the option that best matches your preference
            </Text>
          </View>
          
          {/* Options Section */}
          <View className="px-6 pb-6">
            {question.options.map((option, index) => {
              const isSelected = selectedAnswer === option.value;
              
              return (
                <TouchableOpacity
                  key={option.id}
                  className={`bg-white rounded-2xl p-4 mb-4 border-2 ${
                    isSelected 
                      ? 'border-primary-600 bg-primary-50' 
                      : 'border-neutral-100'
                  }`}
                  onPress={() => handleAnswer(question.id, option.value)}
                  activeOpacity={0.8}
                >
                  {option.image && (
                    <View className="mb-4">
                      <Image 
                        source={{ uri: option.image }} 
                        className="w-full h-36 rounded-xl"
                        style={{ backgroundColor: '#f5f5f5' }}
                        resizeMode="cover"
                      />
                    </View>
                  )}
                  
                  <View className="flex-row items-center justify-between">
                    <Text className={`text-base font-medium flex-1 ${
                      isSelected ? 'text-primary-700' : 'text-neutral-800'
                    }`}>
                      {option.label}
                    </Text>
                    
                    {isSelected && (
                      <View className="ml-3">
                        <CheckCircleIcon size={24} color="#a87f5a" />
                      </View>
                    )}
                  </View>
                  
                  {/* Option number */}
                  <View className="absolute top-4 right-4">
                    <View className={`w-6 h-6 rounded-full items-center justify-center ${
                      isSelected ? 'bg-primary-600' : 'bg-neutral-200'
                    }`}>
                      <Text className={`text-xs font-medium ${
                        isSelected ? 'text-white' : 'text-neutral-600'
                      }`}>
                        {String.fromCharCode(65 + index)}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>

        {/* Professional Navigation Footer */}
        <View className="px-6 py-4 bg-white border-t border-neutral-100">
          <View className="flex-row justify-between items-center">
            <TouchableOpacity 
              onPress={goBack}
              className="flex-row items-center bg-neutral-50 border border-neutral-200 px-4 py-3 rounded-xl"
              activeOpacity={0.8}
            >
              <ChevronLeftIcon size={18} color="#6b7280" />
              <Text className="text-neutral-700 font-medium ml-2">Back</Text>
            </TouchableOpacity>
            
            <View className="flex-1 mx-4">
              <View className="flex-row justify-center space-x-1">
                {quizQuestions.map((_, index) => (
                  <View 
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index <= currentQuestion 
                        ? 'bg-primary-600' 
                        : 'bg-neutral-200'
                    }`}
                  />
                ))}
              </View>
            </View>
            
            <TouchableOpacity 
              onPress={goNext}
              disabled={!selectedAnswer}
              className={`flex-row items-center px-4 py-3 rounded-xl ${
                selectedAnswer 
                  ? 'bg-primary-600' 
                  : 'bg-neutral-200'
              }`}
              activeOpacity={selectedAnswer ? 0.8 : 0.5}
            >
              <Text className={`font-medium mr-2 ${
                selectedAnswer ? 'text-white' : 'text-neutral-500'
              }`}>
                {currentQuestion === quizQuestions.length - 1 ? "Finish" : "Next"}
              </Text>
              {currentQuestion < quizQuestions.length - 1 ? (
                <ChevronRightIcon 
                  size={18} 
                  color={selectedAnswer ? "#ffffff" : "#9ca3af"} 
                />
              ) : (
                <CheckCircleIcon 
                  size={18} 
                  color={selectedAnswer ? "#ffffff" : "#9ca3af"} 
                />
              )}
            </TouchableOpacity>
          </View>
          
          {/* Progress indicators */}
          <View className="mt-3 pt-3 border-t border-neutral-100">
            <Text className="text-center text-xs text-neutral-500">
              {selectedAnswer 
                ? `Ready to ${currentQuestion === quizQuestions.length - 1 ? 'see your results' : 'continue'}`
                : 'Please select an option to continue'
              }
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}