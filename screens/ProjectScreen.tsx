import { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import Header from 'components/ui/Header';
import Card from '../components/ui/Card';
import { projects } from '../data/mockData';
import { 
  CalendarIcon, 
  ChevronRightIcon, 
  PlusIcon,
  ClockIcon,
  UserIcon,
  CurrencyDollarIcon,
  HomeIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  SparklesIcon
} from 'react-native-heroicons/outline';
import { 
  SparklesIcon as SparklesSolid,
  CheckCircleIcon as CheckCircleSolid 
} from 'react-native-heroicons/solid';
import SafeAreaView from 'react-native-safe-area-view';

const { width } = Dimensions.get('window');

export default function ProjectScreen({ navigation }: any) {
  const [activeTab, setActiveTab] = useState('active');

  const statusConfig = {
    planning: { 
      color: 'bg-blue-50 text-blue-700 border-blue-200', 
      icon: ClockIcon, 
      iconColor: '#3b82f6',
      label: 'Planning'
    },
    design: { 
      color: 'bg-purple-50 text-purple-700 border-purple-200', 
      icon: SparklesIcon, 
      iconColor: '#8b5cf6',
      label: 'Design'
    },
    procurement: { 
      color: 'bg-amber-50 text-amber-700 border-amber-200', 
      icon: CurrencyDollarIcon, 
      iconColor: '#f59e0b',
      label: 'Procurement'
    },
    execution: { 
      color: 'bg-emerald-50 text-emerald-700 border-emerald-200', 
      icon: HomeIcon, 
      iconColor: '#10b981',
      label: 'Execution'
    },
    completed: { 
      color: 'bg-gray-50 text-gray-700 border-gray-200', 
      icon: CheckCircleIcon, 
      iconColor: '#6b7280',
      label: 'Completed'
    },
  };

  const activeProjects = projects.filter(p => p.status !== 'completed');
  const completedProjects = projects.filter(p => p.status === 'completed');
  const currentProjects = activeTab === 'active' ? activeProjects : completedProjects;

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'bg-emerald-500';
    if (progress >= 50) return 'bg-primary-500';
    if (progress >= 25) return 'bg-amber-500';
    return 'bg-blue-500';
  };

  const getUrgencyIndicator = (completion: string) => {
    // Simple logic for demo - in real app would calculate from actual dates
    const urgentKeywords = ['week', 'days'];
    const isUrgent = urgentKeywords.some(keyword => completion.toLowerCase().includes(keyword));
    return isUrgent;
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }} forceInset={{ top: 'always' }}>
      <Header title="My Projects" />
      
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Professional Hero Section */}
        <View className="px-6 pt-6 pb-8 bg-white border-b border-neutral-100">
          <View className="mb-6">
            <Text className="text-2xl font-semibold text-neutral-900 mb-2">
              Project Dashboard
            </Text>
            <Text className="text-neutral-600 text-base leading-relaxed">
              Track your interior design projects and collaborate with professionals
            </Text>
          </View>

          {/* Quick Stats */}
          <View className="flex-row justify-between">
            <View className="flex-1 bg-primary-50 rounded-2xl p-4 mr-3 border border-primary-100">
              <View className="flex-row items-center justify-between mb-2">
                <Text className="text-primary-800 font-semibold text-lg">{activeProjects.length}</Text>
                <View className="bg-primary-100 w-8 h-8 rounded-xl items-center justify-center">
                  <ClockIcon size={16} color="#a87f5a" />
                </View>
              </View>
              <Text className="text-primary-700 text-sm font-medium">Active Projects</Text>
            </View>
            
            <View className="flex-1 bg-emerald-50 rounded-2xl p-4 ml-3 border border-emerald-100">
              <View className="flex-row items-center justify-between mb-2">
                <Text className="text-emerald-800 font-semibold text-lg">{completedProjects.length}</Text>
                <View className="bg-emerald-100 w-8 h-8 rounded-xl items-center justify-center">
                  <CheckCircleSolid size={16} color="#10b981" />
                </View>
              </View>
              <Text className="text-emerald-700 text-sm font-medium">Completed</Text>
            </View>
          </View>
        </View>

        {/* Tab Navigation */}
        <View className="px-6 py-4 bg-white border-b border-neutral-100">
          <View className="flex-row bg-neutral-50 rounded-2xl p-1">
            <TouchableOpacity
              onPress={() => setActiveTab('active')}
              className={`flex-1 py-3 rounded-xl ${
                activeTab === 'active' ? 'bg-white border border-neutral-200' : ''
              }`}
              activeOpacity={0.8}
            >
              <Text className={`text-center font-medium ${
                activeTab === 'active' ? 'text-neutral-900' : 'text-neutral-600'
              }`}>
                Active Projects ({activeProjects.length})
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              onPress={() => setActiveTab('completed')}
              className={`flex-1 py-3 rounded-xl ${
                activeTab === 'completed' ? 'bg-white border border-neutral-200' : ''
              }`}
              activeOpacity={0.8}
            >
              <Text className={`text-center font-medium ${
                activeTab === 'completed' ? 'text-neutral-900' : 'text-neutral-600'
              }`}>
                Completed ({completedProjects.length})
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Projects List */}
        <View className="px-6 py-6 bg-neutral-50">
          {currentProjects.length === 0 ? (
            <View className="bg-white rounded-2xl p-8 items-center border border-neutral-100">
              <View className="bg-neutral-100 w-16 h-16 rounded-2xl items-center justify-center mb-4">
                <HomeIcon size={24} color="#6b7280" />
              </View>
              <Text className="text-lg font-semibold text-neutral-900 mb-2">
                {activeTab === 'active' ? 'No Active Projects' : 'No Completed Projects'}
              </Text>
              <Text className="text-neutral-600 text-center mb-6">
                {activeTab === 'active' 
                  ? 'Start your first interior design project today'
                  : 'Complete your first project to see it here'
                }
              </Text>
              {activeTab === 'active' && (
                <TouchableOpacity
                  onPress={() => navigation.navigate('Quiz')}
                  className="bg-primary-600 py-3 px-6 rounded-xl"
                  activeOpacity={0.8}
                >
                  <Text className="text-white font-medium">Start New Project</Text>
                </TouchableOpacity>
              )}
            </View>
          ) : (
            currentProjects.map((project, index) => (
              <View key={project.id} className="mb-4">
                <TouchableOpacity
                  onPress={() => navigation.navigate('ProjectDetail', { project })}
                  className="bg-white rounded-2xl p-5 border border-neutral-100"
                  activeOpacity={0.9}
                >
                  {/* Project Header */}
                  <View className="flex-row justify-between items-start mb-4">
                    <View className="flex-1 mr-4">
                      <View className="flex-row items-center mb-2">
                        <Text className="text-lg font-semibold text-neutral-900 flex-1">
                          {project.name}
                        </Text>
                        {getUrgencyIndicator(project.estimatedCompletion) && (
                          <View className="bg-amber-50 rounded-full p-1 ml-2">
                            <ExclamationTriangleIcon size={12} color="#f59e0b" />
                          </View>
                        )}
                      </View>
                      <Text className="text-neutral-600 text-sm">
                        {project.roomType || 'Living Space'} • {project.style || 'Modern'}
                      </Text>
                    </View>
                    
                    <View className={`px-3 py-1.5 rounded-xl border ${statusConfig[project.status as keyof typeof statusConfig].color}`}>
                      <View className="flex-row items-center">
                        <View className="w-2 h-2 rounded-full mr-2" 
                              style={{ backgroundColor: statusConfig[project.status as keyof typeof statusConfig].iconColor }} />
                        <Text className="text-xs font-medium">
                          {statusConfig[project.status as keyof typeof statusConfig].label}
                        </Text>
                      </View>
                    </View>
                  </View>

                  {/* Progress Section */}
                  <View className="mb-4">
                    <View className="flex-row justify-between items-center mb-2">
                      <Text className="text-sm font-medium text-neutral-700">Progress</Text>
                      <Text className="text-sm font-semibold text-neutral-900">
                        {project.progress}%
                      </Text>
                    </View>
                    <View className="w-full bg-neutral-100 rounded-full h-2.5">
                      <View 
                        className={`h-2.5 rounded-full ${getProgressColor(project.progress)}`}
                        style={{ width: `${project.progress}%` }}
                      />
                    </View>
                  </View>

                  {/* Project Details Grid */}
                  <View className="flex-row justify-between mb-4">
                    <View className="flex-1 mr-4">
                      <View className="flex-row items-center mb-1">
                        <UserIcon size={14} color="#6b7280" />
                        <Text className="text-xs text-neutral-600 ml-1">Designer</Text>
                      </View>
                      <Text className="text-sm font-medium text-neutral-900">{project.designer}</Text>
                    </View>
                    
                    <View className="flex-1 mr-4">
                      <View className="flex-row items-center mb-1">
                        <CurrencyDollarIcon size={14} color="#6b7280" />
                        <Text className="text-xs text-neutral-600 ml-1">Budget</Text>
                      </View>
                      <Text className="text-sm font-medium text-neutral-900">${project.budget}</Text>
                    </View>

                    <View className="flex-1">
                      <View className="flex-row items-center mb-1">
                        <CalendarIcon size={14} color="#6b7280" />
                        <Text className="text-xs text-neutral-600 ml-1">Timeline</Text>
                      </View>
                      <Text className="text-sm font-medium text-neutral-900">
                        {project.estimatedCompletion}
                      </Text>
                    </View>
                  </View>

                  {/* Action Footer */}
                  <View className="flex-row items-center justify-between pt-4 border-t border-neutral-100">
                    <View className="flex-row items-center">
                      <View className="bg-neutral-100 w-6 h-6 rounded-full items-center justify-center mr-2">
                        <Text className="text-xs font-medium text-neutral-700">#{index + 1}</Text>
                      </View>
                      <Text className="text-xs text-neutral-500">
                        {project.status === 'completed' ? 'Completed project' : 'In progress'}
                      </Text>
                    </View>
                    
                    <View className="flex-row items-center">
                      <Text className="text-primary-600 text-sm font-medium mr-1">View Details</Text>
                      <ChevronRightIcon size={14} color="#a87f5a" />
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            ))
          )}
        </View>

        {/* New Project CTA */}
        {activeTab === 'active' && (
          <View className="px-6 py-6 bg-white border-t border-neutral-100">
            <TouchableOpacity 
              onPress={() => navigation.navigate('Quiz')}
              className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-6 items-center"
              activeOpacity={0.9}
            >
              <View className="bg-white/20 w-16 h-16 rounded-2xl items-center justify-center mb-4">
                <PlusIcon size={24} color="white" />
              </View>
              
              <Text className="text-xl font-semibold text-white mb-2">
                Start New Project
              </Text>
              <Text className="text-white/90 text-center text-base leading-relaxed px-4">
                Take our style quiz and get matched with the perfect designer for your space
              </Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Professional Tips Section */}
        <View className="px-6 py-8 bg-neutral-50 border-t border-neutral-100">
          <View className="bg-white rounded-2xl p-6 border border-neutral-100">
            <View className="flex-row items-center mb-4">
              <View className="bg-primary-50 w-12 h-12 rounded-xl items-center justify-center mr-4">
                <SparklesSolid size={20} color="#a87f5a" />
              </View>
              <View>
                <Text className="text-lg font-semibold text-neutral-900">Project Tips</Text>
                <Text className="text-sm text-neutral-600">Maximize your design success</Text>
              </View>
            </View>
            
            <View className="space-y-3">
              {[
                'Communicate regularly with your designer for best results',
                'Set realistic timelines for procurement and installation',
                'Keep a buffer of 10-20% in your budget for unexpected changes'
              ].map((tip, index) => (
                <View key={index} className="flex-row items-start">
                  <View className="bg-primary-100 w-5 h-5 rounded-full items-center justify-center mr-3 mt-0.5">
                    <Text className="text-primary-700 text-xs font-bold">{index + 1}</Text>
                  </View>
                  <Text className="text-neutral-700 text-sm flex-1">{tip}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
        
        {/* Bottom spacing */}
        <View className="h-4" />
      </ScrollView>
    </SafeAreaView>
  );
}