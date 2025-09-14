import { View, Text, TouchableOpacity, Image, Platform, StatusBar } from 'react-native';
import { BellIcon, MagnifyingGlassIcon, SparklesIcon } from 'react-native-heroicons/outline';

interface HeaderProps {
  title?: string;
  showSearch?: boolean;
  showNotifications?: boolean;
  onSearchPress?: () => void;
  onNotificationPress?: () => void;
}

export default function Header({
  title,
  showSearch = true,
  showNotifications = true,
  onSearchPress,
  onNotificationPress
}: HeaderProps) {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <View 
        className="bg-white"
        style={{
          paddingTop: Platform.OS === 'ios' ? 0 :0,
          elevation: 8,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.04,
          shadowRadius: 12,
        }}
      >
        {/* Main Header Content */}
        <View className="flex-row items-center justify-between px-6 py-5">
          {/* Premium Logo Section */}
          <View className="flex-row items-center flex-1">
            <View 
              className="relative mr-4"
              style={{
                shadowColor: '#a87f5a',
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowOpacity: 0.12,
                shadowRadius: 6,
                elevation: 4,
              }}
            >
              <View className="w-12 h-12 bg-primary-50 rounded-3xl items-center justify-center border-2 border-white">
                <SparklesIcon size={26} color="#a87f5a" />
              </View>
              
              {/* Premium indicator */}
              <View 
                className="absolute -top-1 -right-1 w-5 h-5 bg-amber-400 rounded-full items-center justify-center border-3 border-white"
                style={{
                  shadowColor: '#f59e0b',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.3,
                  shadowRadius: 4,
                  elevation: 3,
                }}
              >
                <View className="w-2 h-2 bg-amber-600 rounded-full" />
              </View>
            </View>
            
            <View className="flex-1">
              <View className="flex-row items-baseline">
                <Text 
                  className="text-2xl font-bold text-neutral-900"
                  style={{ 
                    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'Roboto',
                    letterSpacing: -0.8,
                    fontWeight: '800'
                  }}
                >
                  Interior
                </Text>
                <View className="bg-primary-600 ml-2 px-3 py-1 rounded-xl">
                  <Text 
                    className="text-white font-black text-sm"
                    style={{ 
                      fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'Roboto',
                      letterSpacing: 1,
                      fontWeight: '900'
                    }}
                  >
                    AI
                  </Text>
                </View>
              </View>
              <Text 
                className="text-xs text-primary-600 mt-1 font-bold tracking-widest uppercase"
                style={{ letterSpacing: 1.2 }}
              >
                Premium Studio
              </Text>
            </View>
          </View>
          
          {/* Premium Action Buttons */}
          <View className="flex-row items-center space-x-10 gap-3">
            {showSearch && (
              <TouchableOpacity
                onPress={onSearchPress}
                activeOpacity={0.6}
                className="relative"
                style={{
                  transform: [{ scale: 1 }],
                }}
              >
                <View 
                  className="w-12 h-12 bg-neutral-50 rounded-3xl items-center justify-center border border-neutral-200"
                  style={{
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.06,
                    shadowRadius: 4,
                    elevation: 2,
                  }}
                >
                  <MagnifyingGlassIcon size={22} color="#374151" />
                </View>
                
                {/* Subtle accent */}
                <View className="absolute bottom-0 right-0 w-3 h-3 bg-primary-100 rounded-full border border-white" />
              </TouchableOpacity>
            )}
            
            {showNotifications && (
              <TouchableOpacity
                onPress={onNotificationPress}
                activeOpacity={0.6}
                className="relative"
              >
                <View 
                  className="w-12 h-12 bg-neutral-50 rounded-3xl items-center justify-center border border-neutral-200"
                  style={{
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.06,
                    shadowRadius: 4,
                    elevation: 2,
                  }}
                >
                  <BellIcon size={22} color="#374151" />
                  
                  {/* Premium notification badge */}
                  <View 
                    className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full items-center justify-center border-3 border-white"
                    style={{
                      shadowColor: '#ef4444',
                      shadowOffset: {
                        width: 0,
                        height: 2,
                      },
                      shadowOpacity: 0.25,
                      shadowRadius: 4,
                      elevation: 3,
                    }}
                  >
                    <Text className="text-white text-xs font-black">3</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          </View>
        </View>
        
        {/* Sophisticated Bottom Border */}
        <View className="mx-6 mb-1">
          <View className="h-px bg-neutral-100" />
          <View className="h-px bg-primary-100 w-1/3 mt-px" />
        </View>
      </View>
    </>
  );
}