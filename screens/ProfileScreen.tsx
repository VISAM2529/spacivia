import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Container } from 'components/Container';
import Header from 'components/ui/Header';
import Button from '../components/ui/Button';
import { mockUser } from '../data/mockData';
import { 
  Cog6ToothIcon, 
  BookmarkIcon, 
  ClockIcon, 
  UserIcon, 
  QuestionMarkCircleIcon, 
  ArrowRightOnRectangleIcon,
  ChevronRightIcon,
  PencilSquareIcon,
  ChartBarIcon,
  HeartIcon,
  BellIcon
} from 'react-native-heroicons/outline';
import SafeAreaView from 'react-native-safe-area-view';

export default function ProfileScreen({ navigation }: any) {
  const stats = [
    { label: 'Saved Designs', value: '24', color: '#a87f5a' },
    { label: 'Style Quizzes', value: '3', color: '#6366f1' },
    { label: 'Active Projects', value: '2', color: '#10b981' },
  ];

  const menuSections = [
    {
      title: 'My Content',
      items: [
        {
          title: 'Saved Designs',
          description: 'Your bookmarked interior designs',
          icon: <BookmarkIcon size={20} color="#6b7280" />,
          onPress: () => navigation.navigate('SavedDesigns'),
          badge: '24'
        },
        {
          title: 'Style Quiz History',
          description: 'Previous quiz results and preferences',
          icon: <ClockIcon size={20} color="#6b7280" />,
          onPress: () => navigation.navigate('QuizHistory'),
        },
        {
          title: 'My Projects',
          description: 'Active and completed design projects',
          icon: <ChartBarIcon size={20} color="#6b7280" />,
          onPress: () => navigation.navigate('MyProjects'),
          badge: '2'
        },
      ]
    },
    {
      title: 'Account',
      items: [
        {
          title: 'Personal Information',
          description: 'Update your profile details',
          icon: <UserIcon size={20} color="#6b7280" />,
          onPress: () => navigation.navigate('AccountSettings'),
        },
        {
          title: 'Notifications',
          description: 'Manage your notification preferences',
          icon: <BellIcon size={20} color="#6b7280" />,
          onPress: () => navigation.navigate('NotificationSettings'),
        },
        {
          title: 'App Settings',
          description: 'Customize your app experience',
          icon: <Cog6ToothIcon size={20} color="#6b7280" />,
          onPress: () => navigation.navigate('AppPreferences'),
        },
      ]
    },
    {
      title: 'Support',
      items: [
        {
          title: 'Help Center',
          description: 'Get help and find answers',
          icon: <QuestionMarkCircleIcon size={20} color="#6b7280" />,
          onPress: () => navigation.navigate('HelpSupport'),
        },
      ]
    }
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }} forceInset={{ top: 'always' }}>
      <Header 
        showSearch={false}
        showNotifications={false}
      />
      
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Professional Profile Header */}
        <View className="px-6 pt-6 pb-8 bg-white">
          <View className="items-center">
            <View className="relative mb-4">
              <Image 
                source={{ uri: mockUser.avatar }} 
                className="w-20 h-20 rounded-full border-2 border-neutral-100"
                style={{ backgroundColor: '#f5f5f5' }}
              />
              <TouchableOpacity 
                className="absolute -bottom-1 -right-1 bg-primary-600 w-7 h-7 rounded-full items-center justify-center"
                onPress={() => navigation.navigate('EditProfile')}
              >
                <PencilSquareIcon size={14} color="white" />
              </TouchableOpacity>
            </View>
            
            <Text className="text-xl font-semibold text-neutral-900 mb-1">
              {mockUser.name}
            </Text>
            <Text className="text-neutral-600 text-base mb-4">{mockUser.email}</Text>
            
            <TouchableOpacity 
              className="bg-neutral-50 border border-neutral-200 px-6 py-2.5 rounded-xl"
              onPress={() => navigation.navigate('EditProfile')}
            >
              <Text className="text-neutral-700 font-medium">Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Enhanced Stats */}
        <View className="mx-6 mb-6">
          <View className="bg-white border border-neutral-100 rounded-2xl p-6">
            <Text className="text-lg font-semibold text-neutral-900 mb-4">Your Activity</Text>
            
            <View className="flex-row justify-between">
              {stats.map((stat, index) => (
                <View key={index} className="items-center flex-1">
                  <View 
                    className="w-12 h-12 rounded-2xl items-center justify-center mb-2"
                    style={{ backgroundColor: stat.color + '15' }}
                  >
                    <Text 
                      className="text-lg font-bold"
                      style={{ color: stat.color }}
                    >
                      {stat.value}
                    </Text>
                  </View>
                  <Text className="text-neutral-600 text-sm text-center leading-tight">
                    {stat.label}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Professional Menu Sections */}
        <View className="px-6">
          {menuSections.map((section, sectionIndex) => (
            <View key={sectionIndex} className="mb-6">
              <Text className="text-base font-semibold text-neutral-900 mb-3 px-2">
                {section.title}
              </Text>
              
              <View className="bg-white border border-neutral-100 rounded-2xl overflow-hidden">
                {section.items.map((item, itemIndex) => (
                  <TouchableOpacity
                    key={itemIndex}
                    className={`flex-row items-center p-4 ${
                      itemIndex < section.items.length - 1 ? 'border-b border-neutral-50' : ''
                    }`}
                    onPress={item.onPress}
                    activeOpacity={0.8}
                  >
                    <View className="bg-neutral-50 w-10 h-10 rounded-xl items-center justify-center mr-3">
                      {item.icon}
                    </View>
                    
                    <View className="flex-1">
                      <View className="flex-row items-center">
                        <Text className="font-medium text-neutral-900 mr-2">{item.title}</Text>
                        {item.badge && (
                          <View className="bg-primary-100 px-2 py-0.5 rounded-lg">
                            <Text className="text-primary-700 text-xs font-medium">{item.badge}</Text>
                          </View>
                        )}
                      </View>
                      <Text className="text-neutral-500 text-sm mt-0.5">{item.description}</Text>
                    </View>
                    
                    <ChevronRightIcon size={16} color="#9ca3af" />
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          ))}
        </View>

        {/* Professional Logout Section */}
        <View className="px-6 pb-8">
          <View className="bg-white border border-neutral-100 rounded-2xl overflow-hidden">
            <TouchableOpacity 
              className="flex-row items-center p-4"
              onPress={() => {
                // Add logout confirmation modal here
                console.log('Logout pressed');
              }}
              activeOpacity={0.8}
            >
              <View className="bg-red-50 w-10 h-10 rounded-xl items-center justify-center mr-3">
                <ArrowRightOnRectangleIcon size={20} color="#dc2626" />
              </View>
              
              <View className="flex-1">
                <Text className="font-medium text-red-600">Sign Out</Text>
                <Text className="text-neutral-500 text-sm mt-0.5">Log out of your account</Text>
              </View>
              
              <ChevronRightIcon size={16} color="#9ca3af" />
            </TouchableOpacity>
          </View>
        </View>

        {/* App Version Info */}
        <View className="px-6 pb-6">
          <Text className="text-center text-neutral-400 text-sm">
            Interior AI • Version 1.2.0
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}