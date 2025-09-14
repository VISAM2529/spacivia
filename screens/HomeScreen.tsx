import { View, Text, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Container } from 'components/Container';
import Header from 'components/ui/Header';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { designStyles, roomTypes, mockUser } from '../data/mockData';
import { ChevronRightIcon, SparklesIcon, CameraIcon, HomeIcon, UserIcon, BeakerIcon } from 'react-native-heroicons/solid';
import SafeAreaView from 'react-native-safe-area-view';

const { width } = Dimensions.get('window');

export default function HomeScreen({ navigation }: any) {
  const featuredDesigns = designStyles.slice(0, 3);
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }} forceInset={{ top: 'always' }}>
      <Header />
      
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Clean Hero Section */}
        <View className="px-6 pt-6 pb-8 bg-white border-b border-neutral-100">
          <View className="mb-8">
            <Text className="text-2xl font-semibold text-neutral-900 mb-2">
              Good morning, {mockUser.name.split(' ')[0]}
            </Text>
            <Text className="text-neutral-600 text-base">
              Design your perfect space with AI assistance
            </Text>
          </View>
          
          <View className="flex-row space-x-3 gap-3">
            <TouchableOpacity 
              onPress={() => navigation.navigate('Quiz')}
              className="flex-1 bg-primary-600 py-3.5 px-4 rounded-xl"
              activeOpacity={0.8}
            >
              <View className="flex-row items-center justify-center">
                <SparklesIcon size={18} color="white" />
                <Text className="text-white font-medium ml-2">Style Quiz</Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity 
              onPress={() => navigation.navigate('Gallery')}
              className="flex-1 bg-neutral-50 border border-neutral-200 py-3.5 px-4 rounded-xl"
              activeOpacity={0.8}
            >
              <View className="flex-row items-center justify-center">
                <CameraIcon size={18} color="#6b7280" />
                <Text className="text-neutral-700 font-medium ml-2">Gallery</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Professional Quick Access */}
        <View className="px-6 py-6 bg-white">
          <View className="flex-row justify-between items-center mb-5">
            <Text className="text-lg font-semibold text-neutral-900">Quick Access</Text>
            <TouchableOpacity className="flex-row items-center">
              <Text className="text-primary-600 text-sm font-medium">View all</Text>
              <ChevronRightIcon size={14} color="#a87f5a" className="ml-1" />
            </TouchableOpacity>
          </View>
          
          <View className="flex-row justify-between">
            {[
              { icon: SparklesIcon, label: 'AI Design', bgColor: '#fef7f0' },
              { icon: HomeIcon, label: 'Projects', bgColor: '#f0f9ff' },
              { icon: UserIcon, label: 'Consult', bgColor: '#f0fdf4' },
              { icon: BeakerIcon, label: 'AR View', bgColor: '#fffbeb' },
            ].map((item, index) => (
              <TouchableOpacity 
                key={index}
                className="items-center flex-1"
                activeOpacity={0.7}
              >
                <View 
                  className="w-16 h-16 rounded-2xl items-center justify-center mb-3 border border-neutral-100"
                  style={{ backgroundColor: item.bgColor }}
                >
                  <item.icon size={24} color="#6b7280" />
                </View>
                <Text className="text-xs font-medium text-center text-neutral-700">
                  {item.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Clean Featured Styles */}
        <View className="px-6 py-6 bg-neutral-50">
          <View className="flex-row justify-between items-center mb-5">
            <View>
              <Text className="text-lg font-semibold text-neutral-900">Featured Styles</Text>
              <Text className="text-sm text-neutral-600">Trending interior designs</Text>
            </View>
            <TouchableOpacity className="flex-row items-center">
              <Text className="text-primary-600 text-sm font-medium">View all</Text>
              <ChevronRightIcon size={14} color="#a87f5a" className="ml-1" />
            </TouchableOpacity>
          </View>
          
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {featuredDesigns.map((style, index) => (
              <TouchableOpacity
                key={style.id}
                onPress={() => navigation.navigate('StyleDetail', { style })}
                activeOpacity={0.9}
                style={{ marginRight: 16, width: width * 0.7 }}
              >
                <View className="bg-white rounded-2xl overflow-hidden border border-neutral-100">
                  <View className="relative">
                    <Image 
                      source={{ uri: style.image }} 
                      className="w-full h-40"
                      style={{ backgroundColor: '#f5f5f5' }}
                    />
                    <View className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 border border-neutral-100">
                      <Text className="text-xs font-medium text-neutral-700">#{index + 1}</Text>
                    </View>
                  </View>
                  
                  <View className="p-4">
                    <Text className="text-base font-semibold text-neutral-900 mb-1">
                      {style.name}
                    </Text>
                    <Text className="text-neutral-600 text-sm mb-4 leading-relaxed">
                      {style.description}
                    </Text>
                    
                    <View className="flex-row justify-between items-center">
                      <View className="bg-primary-50 rounded-lg px-3 py-1.5">
                        <Text className="text-primary-700 font-medium text-sm">Explore</Text>
                      </View>
                      <View className="flex-row items-center">
                        <Text className="text-xs text-neutral-500 mr-1">125 designs</Text>
                        <ChevronRightIcon size={12} color="#9a9a9a" />
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Professional Room Types */}
        <View className="px-6 py-6 bg-white">
          <View className="flex-row justify-between items-center mb-5">
            <View>
              <Text className="text-lg font-semibold text-neutral-900">Browse by Room</Text>
              <Text className="text-sm text-neutral-600">Find designs for every space</Text>
            </View>
            <TouchableOpacity className="flex-row items-center">
              <Text className="text-primary-600 text-sm font-medium">All rooms</Text>
              <ChevronRightIcon size={14} color="#a87f5a" className="ml-1" />
            </TouchableOpacity>
          </View>
          
          <View className="flex-row flex-wrap justify-between">
            {roomTypes.map((room, index) => (
              <TouchableOpacity 
                key={room.id} 
                className="w-[48%] mb-4"
                onPress={() => navigation.navigate('RoomDesigns', { room })}
                activeOpacity={0.8}
              >
                <View className="bg-white border border-neutral-100 rounded-2xl p-4">
                  <View className="bg-primary-50 w-12 h-12 rounded-xl items-center justify-center mb-3">
                    <SparklesIcon size={20} color="#a87f5a" />
                  </View>
                  <Text className="font-semibold text-neutral-900 mb-1">
                    {room.name}
                  </Text>
                  <Text className="text-xs text-neutral-500">240+ designs</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Clean Inspiration Section */}
        <View className="px-6 py-8 bg-neutral-50 border-t border-neutral-100">
          <View className="items-center">
            <View className="bg-primary-50 w-16 h-16 rounded-2xl items-center justify-center mb-4 border border-primary-100">
              <SparklesIcon size={24} color="#a87f5a" />
            </View>
            
            <Text className="text-xl font-semibold text-neutral-900 text-center mb-2">
              Get Inspired
            </Text>
            <Text className="text-neutral-600 text-center mb-6 text-base leading-relaxed px-4">
              Discover beautiful interiors tailored to your style preferences
            </Text>
            
            <TouchableOpacity 
              onPress={() => navigation.navigate('Gallery')}
              className="bg-primary-600 py-3.5 px-8 rounded-xl"
              activeOpacity={0.8}
            >
              <Text className="text-white font-medium text-base">Explore Gallery</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Bottom spacing */}
        <View className="h-4" />
      </ScrollView>
    </SafeAreaView>
  );
}