import { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import Header from 'components/ui/Header';
import Button from '../components/ui/Button';
import { designStyles, aiDesigns } from '../data/mockData';
import { PhotoIcon, SparklesIcon, ArrowPathIcon, ChevronRightIcon, CheckCircleIcon } from 'react-native-heroicons/outline';
import { SparklesIcon as SparklesSolid } from 'react-native-heroicons/solid';
import SafeAreaView from 'react-native-safe-area-view';

const { width } = Dimensions.get('window');

export default function AIVisualizerScreen({ navigation }: any) {
  const [selectedStyle, setSelectedStyle] = useState('');
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [generatedDesign, setGeneratedDesign] = useState<any>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateDesign = () => {
    if (selectedImage && selectedStyle) {
      setIsGenerating(true);
      // Simulate AI generation with loading state
      setTimeout(() => {
        const design = aiDesigns[0];
        setGeneratedDesign(design);
        setIsGenerating(false);
      }, 2000);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }} forceInset={{ top: 'always' }}>
      <Header title="AI Design Studio" />
      
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Professional Hero Section */}
        <View className="px-6 pt-6 pb-8 bg-white border-b border-neutral-100">
          <View className="mb-6">
            <Text className="text-2xl font-semibold text-neutral-900 mb-2">
              AI-Powered Design Studio
            </Text>
            <Text className="text-neutral-600 text-base leading-relaxed">
              Transform your space with intelligent design suggestions powered by advanced AI
            </Text>
          </View>
        </View>

        {/* Upload Section */}
        <View className="px-6 py-6 bg-white">
          <View className="flex-row justify-between items-center mb-5">
            <Text className="text-lg font-semibold text-neutral-900">Upload Your Room</Text>
            {selectedImage && (
              <View className="flex-row items-center">
                <CheckCircleIcon size={16} color="#10b981" />
                <Text className="text-green-600 text-sm font-medium ml-1">Image selected</Text>
              </View>
            )}
          </View>
          
          <TouchableOpacity 
            className={`border-2 border-dashed rounded-2xl p-8 items-center justify-center ${
              selectedImage ? 'border-primary-200 bg-primary-50' : 'border-neutral-200 bg-neutral-50'
            }`}
            onPress={() => setSelectedImage(aiDesigns[0].beforeImage)}
            activeOpacity={0.8}
          >
            {selectedImage ? (
              <View className="w-full">
                <Image 
                  source={{ uri: selectedImage }} 
                  className="w-full h-48 rounded-xl"
                  style={{ backgroundColor: '#f5f5f5' }}
                />
                <TouchableOpacity 
                  className="absolute top-3 right-3 bg-white rounded-full p-2 border border-neutral-200"
                  onPress={() => setSelectedImage(null)}
                >
                  <Text className="text-xs font-medium text-neutral-700">Change</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View className="items-center">
                <View className="bg-neutral-100 w-16 h-16 rounded-2xl items-center justify-center mb-4">
                  <PhotoIcon size={24} color="#6b7280" />
                </View>
                <Text className="text-neutral-900 font-medium mb-1">
                  Upload a photo of your room
                </Text>
                <Text className="text-neutral-500 text-sm text-center">
                  Choose a clear image for best AI results
                </Text>
              </View>
            )}
          </TouchableOpacity>
        </View>

        {/* Style Selection */}
        <View className="px-6 py-6 bg-neutral-50">
          <View className="flex-row justify-between items-center mb-5">
            <View>
              <Text className="text-lg font-semibold text-neutral-900">Choose Your Style</Text>
              <Text className="text-sm text-neutral-600">Select a design aesthetic for your space</Text>
            </View>
            {selectedStyle && (
              <View className="flex-row items-center">
                <CheckCircleIcon size={16} color="#10b981" />
                <Text className="text-green-600 text-sm font-medium ml-1">Style selected</Text>
              </View>
            )}
          </View>
          
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-2">
            {designStyles.map((style, index) => (
              <TouchableOpacity
                key={style.id}
                className="mr-4"
                onPress={() => setSelectedStyle(style.name)}
                activeOpacity={0.8}
              >
                <View className={`relative ${index === 0 ? 'ml-0' : ''}`}>
                  <View className={`rounded-2xl overflow-hidden border-2 ${
                    selectedStyle === style.name 
                      ? 'border-primary-500 bg-white' 
                      : 'border-neutral-200 bg-white'
                  }`}>
                    <Image 
                      source={{ uri: style.image }} 
                      className="w-24 h-24"
                      style={{ backgroundColor: '#f5f5f5' }}
                    />
                    {selectedStyle === style.name && (
                      <View className="absolute top-2 right-2 bg-primary-600 rounded-full p-1">
                        <CheckCircleIcon size={12} color="white" />
                      </View>
                    )}
                  </View>
                  <Text className={`text-sm font-medium mt-2 text-center ${
                    selectedStyle === style.name ? 'text-primary-700' : 'text-neutral-700'
                  }`}>
                    {style.name}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Generate Section */}
        <View className="px-6 py-6 bg-white border-t border-neutral-100">
          <TouchableOpacity
            onPress={handleGenerateDesign}
            disabled={!selectedImage || !selectedStyle || isGenerating}
            className={`py-4 px-6 rounded-2xl ${
              !selectedImage || !selectedStyle || isGenerating
                ? 'bg-neutral-100' 
                : 'bg-primary-600'
            }`}
            activeOpacity={0.8}
          >
            <View className="flex-row items-center justify-center">
              {isGenerating ? (
                <>
                  <View className="animate-spin mr-3">
                    <SparklesSolid size={20} color="#6b7280" />
                  </View>
                  <Text className="text-neutral-600 font-medium">Generating Design...</Text>
                </>
              ) : (
                <>
                  <SparklesSolid size={20} color={!selectedImage || !selectedStyle ? "#6b7280" : "white"} />
                  <Text className={`font-medium ml-2 ${
                    !selectedImage || !selectedStyle ? 'text-neutral-600' : 'text-white'
                  }`}>
                    Generate AI Design
                  </Text>
                </>
              )}
            </View>
          </TouchableOpacity>
          
          {(!selectedImage || !selectedStyle) && (
            <Text className="text-neutral-500 text-sm text-center mt-3">
              Please upload an image and select a style to continue
            </Text>
          )}
        </View>

        {/* Results Section */}
        {generatedDesign && (
          <View className="px-6 py-6 bg-neutral-50 border-t border-neutral-100">
            <View className="flex-row justify-between items-center mb-5">
              <View>
                <Text className="text-lg font-semibold text-neutral-900">Your AI Design</Text>
                <Text className="text-sm text-neutral-600">Transform complete • Ready to explore</Text>
              </View>
              <TouchableOpacity 
                className="flex-row items-center bg-white border border-neutral-200 px-3 py-2 rounded-xl"
                onPress={() => setGeneratedDesign(null)}
                activeOpacity={0.8}
              >
                <ArrowPathIcon size={16} color="#6b7280" />
                <Text className="text-neutral-700 ml-1 font-medium">Retry</Text>
              </TouchableOpacity>
            </View>

            {/* Before/After Comparison */}
            <View className="mb-6">
              <View className="bg-white rounded-2xl p-4 border border-neutral-100">
                <View className="flex-row justify-between mb-4">
                  <View className="w-[48%]">
                    <Text className="text-sm font-medium text-neutral-700 mb-2 text-center">Before</Text>
                    <Image 
                      source={{ uri: generatedDesign.beforeImage }} 
                      className="w-full h-32 rounded-xl"
                      style={{ backgroundColor: '#f5f5f5' }}
                    />
                  </View>
                  <View className="w-[48%]">
                    <Text className="text-sm font-medium text-neutral-700 mb-2 text-center">AI Enhanced</Text>
                    <Image 
                      source={{ uri: generatedDesign.afterImage }} 
                      className="w-full h-32 rounded-xl"
                      style={{ backgroundColor: '#f5f5f5' }}
                    />
                    <View className="absolute top-8 right-2 bg-primary-600 rounded-full px-2 py-1">
                      <Text className="text-white text-xs font-medium">AI</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>

            {/* Design Details */}
            <View className="bg-white rounded-2xl p-5 mb-6 border border-neutral-100">
              <View className="flex-row items-center mb-3">
                <View className="bg-primary-50 w-10 h-10 rounded-xl items-center justify-center mr-3">
                  <SparklesSolid size={16} color="#a87f5a" />
                </View>
                <View>
                  <Text className="font-semibold text-neutral-900 text-base">
                    {generatedDesign.style} {generatedDesign.roomType}
                  </Text>
                  <Text className="text-neutral-500 text-sm">AI-generated design</Text>
                </View>
              </View>
              
              <Text className="text-neutral-600 text-sm leading-relaxed mb-4">
                This design incorporates {generatedDesign.tags.join(', ')} elements, carefully balanced to create a harmonious and functional space.
              </Text>
              
              <View className="flex-row flex-wrap">
                {generatedDesign.tags.map((tag: string, index: number) => (
                  <View key={index} className="bg-neutral-100 rounded-lg px-3 py-1.5 mr-2 mb-2">
                    <Text className="text-neutral-700 text-xs font-medium">{tag}</Text>
                  </View>
                ))}
              </View>
            </View>

            {/* Action Buttons */}
            <View className="flex-row space-x-3">
              <TouchableOpacity 
                className="flex-1 bg-white border border-neutral-200 py-3.5 px-4 rounded-xl"
                activeOpacity={0.8}
              >
                <Text className="text-neutral-700 font-medium text-center">Save Design</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                onPress={() => navigation.navigate('Projects')}
                className="flex-1 bg-primary-600 py-3.5 px-4 rounded-xl"
                activeOpacity={0.8}
              >
                <Text className="text-white font-medium text-center">Start Project</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* Recent Designs Section */}
        <View className="px-6 py-6 bg-white border-t border-neutral-100">
          <View className="flex-row justify-between items-center mb-5">
            <View>
              <Text className="text-lg font-semibold text-neutral-900">Recent AI Designs</Text>
              <Text className="text-sm text-neutral-600">Your previous transformations</Text>
            </View>
            <TouchableOpacity className="flex-row items-center">
              <Text className="text-primary-600 text-sm font-medium">View all</Text>
              <ChevronRightIcon size={14} color="#a87f5a" className="ml-1" />
            </TouchableOpacity>
          </View>
          
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {aiDesigns.map((design, index) => (
              <TouchableOpacity 
                key={design.id}
                className="mr-4"
                onPress={() => setGeneratedDesign(design)}
                activeOpacity={0.8}
                style={{ width: width * 0.4 }}
              >
                <View className="bg-white border border-neutral-100 rounded-2xl p-3">
                  <Image 
                    source={{ uri: design.afterImage }} 
                    className="w-full h-24 rounded-xl mb-3"
                    style={{ backgroundColor: '#f5f5f5' }}
                  />
                  <Text className="text-sm font-medium text-neutral-900 mb-1">
                    {design.style} {design.roomType}
                  </Text>
                  <Text className="text-xs text-neutral-500">2 days ago</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Professional CTA Section */}
        <View className="px-6 py-8 bg-neutral-50 border-t border-neutral-100">
          <View className="items-center">
            <View className="bg-primary-50 w-16 h-16 rounded-2xl items-center justify-center mb-4 border border-primary-100">
              <SparklesSolid size={24} color="#a87f5a" />
            </View>
            
            <Text className="text-xl font-semibold text-neutral-900 text-center mb-2">
              Ready to Transform?
            </Text>
            <Text className="text-neutral-600 text-center mb-6 text-base leading-relaxed px-4">
              Upload your room photo and let our AI create stunning design possibilities
            </Text>
            
            <TouchableOpacity 
              className="bg-primary-600 py-3.5 px-8 rounded-xl"
              activeOpacity={0.8}
            >
              <Text className="text-white font-medium text-base">Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Bottom spacing */}
        <View className="h-4" />
      </ScrollView>
    </SafeAreaView>
  );
}