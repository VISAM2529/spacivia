import { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Modal, Dimensions } from 'react-native';
import { Container } from 'components/Container';
import Header from 'components/ui/Header';
import Button from '../components/ui/Button';
import { galleryItems, designStyles, roomTypes } from '../data/mockData';
import { FunnelIcon, ArrowsPointingOutIcon, XMarkIcon, HeartIcon, EyeIcon, BookmarkIcon } from 'react-native-heroicons/outline';
import { HeartIcon as HeartSolid, BookmarkIcon as BookmarkSolid } from 'react-native-heroicons/solid';
import { ScrollView } from 'react-native-gesture-handler';
import SafeAreaView from 'react-native-safe-area-view';

const { width } = Dimensions.get('window');

export default function GalleryScreen({ navigation }: any) {
  const [selectedFilters, setSelectedFilters] = useState({
    style: '',
    roomType: '',
  });
  const [showFilters, setShowFilters] = useState(false);
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [favorites, setFavorites] = useState<string[]>([]);

  const filteredItems = galleryItems.filter(item => {
    if (selectedFilters.style && item.style !== selectedFilters.style) return false;
    if (selectedFilters.roomType && item.roomType !== selectedFilters.roomType) return false;
    return true;
  });

  const toggleFavorite = (id: string) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(item => item !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const clearFilters = () => {
    setSelectedFilters({
      style: '',
      roomType: '',
    });
  };

  const hasActiveFilters = selectedFilters.style || selectedFilters.roomType;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }} forceInset={{ top: 'always' }}>
      <Header 
        onSearchPress={() => navigation.navigate('Search')}
      />
      
      {/* Professional Filter Bar */}
      <View className="px-6 py-4 bg-white border-b border-neutral-100">
        <View className="flex-row justify-between items-center">
          <View>
            <Text className="text-lg font-semibold text-neutral-900">
              Design Gallery
            </Text>
            <Text className="text-sm text-neutral-600 mt-0.5">
              {filteredItems.length} designs available
            </Text>
          </View>
          
          <TouchableOpacity 
            className={`flex-row items-center px-4 py-2.5 rounded-xl border ${
              hasActiveFilters 
                ? 'bg-primary-50 border-primary-200' 
                : 'bg-neutral-50 border-neutral-200'
            }`}
            onPress={() => setShowFilters(true)}
            activeOpacity={0.8}
          >
            <FunnelIcon 
              size={18} 
              color={hasActiveFilters ? "#a87f5a" : "#6b7280"} 
            />
            <Text className={`ml-2 font-medium ${
              hasActiveFilters ? 'text-primary-700' : 'text-neutral-700'
            }`}>
              Filter
            </Text>
            {hasActiveFilters && (
              <View className="bg-primary-600 w-2 h-2 rounded-full ml-1" />
            )}
          </TouchableOpacity>
        </View>
      </View>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <View className="px-6 py-3 bg-neutral-50 border-b border-neutral-100">
          <View className="flex-row items-center flex-wrap">
            <Text className="text-sm text-neutral-600 mr-2">Active filters:</Text>
            {selectedFilters.style && (
              <View className="bg-primary-100 px-2 py-1 rounded-lg mr-2 mb-1">
                <Text className="text-primary-700 text-xs font-medium">
                  {selectedFilters.style}
                </Text>
              </View>
            )}
            {selectedFilters.roomType && (
              <View className="bg-primary-100 px-2 py-1 rounded-lg mr-2 mb-1">
                <Text className="text-primary-700 text-xs font-medium">
                  {selectedFilters.roomType}
                </Text>
              </View>
            )}
            <TouchableOpacity onPress={clearFilters} className="ml-auto">
              <Text className="text-primary-600 text-sm font-medium">Clear all</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* Enhanced Gallery Grid */}
      <FlatList
        data={filteredItems}
        numColumns={2}
        keyExtractor={item => item.id}
        contentContainerStyle={{ padding: 16, backgroundColor: '#fafafa' }}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={{ width: (width - 48) / 2, marginBottom: 16 }}
            onPress={() => setSelectedImage(item)}
            activeOpacity={0.9}
          >
            <View className="bg-white rounded-2xl overflow-hidden border border-neutral-100">
              <View className="relative">
                <Image 
                  source={{ uri: item.image }} 
                  className="w-full h-48"
                  style={{ backgroundColor: '#f5f5f5' }}
                  resizeMode="cover"
                />
                
                {/* Image Overlay Actions */}
                <View className="absolute top-3 right-3">
                  <TouchableOpacity 
                    className="bg-white/90 backdrop-blur w-8 h-8 rounded-full items-center justify-center"
                    onPress={() => toggleFavorite(item.id)}
                  >
                    {favorites.includes(item.id) ? (
                      <HeartSolid size={16} color="#ef4444" />
                    ) : (
                      <HeartIcon size={16} color="#6b7280" />
                    )}
                  </TouchableOpacity>
                </View>
                
                {/* Budget Badge */}
                <View className="absolute bottom-3 left-3">
                  <View className="bg-black/70 backdrop-blur px-2 py-1 rounded-lg">
                    <Text className="text-white text-xs font-medium">
                      {item.budgetRange}
                    </Text>
                  </View>
                </View>
              </View>
              
              <View className="p-4">
                <Text className="font-semibold text-neutral-900 mb-1" numberOfLines={1}>
                  {item.title}
                </Text>
                
                <Text className="text-xs text-neutral-500 mb-3" numberOfLines={1}>
                  {item.style} • {item.roomType}
                </Text>
                
                <View className="flex-row items-center justify-between">
                  <View className="flex-row items-center">
                    <EyeIcon size={14} color="#9ca3af" />
                    <Text className="text-xs text-neutral-500 ml-1">Preview</Text>
                  </View>
                  
                  <TouchableOpacity className="bg-primary-50 px-2 py-1 rounded-lg">
                    <Text className="text-primary-700 text-xs font-medium">View</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
        ListEmptyComponent={() => (
          <View className="flex-1 items-center justify-center py-16">
            <Text className="text-neutral-500 text-center text-base">
              No designs found matching your filters
            </Text>
            <TouchableOpacity onPress={clearFilters} className="mt-4">
              <Text className="text-primary-600 font-medium">Clear filters</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Enhanced Filters Modal */}
      <Modal visible={showFilters} animationType="slide" transparent>
        <View className="flex-1 bg-black/50 justify-end">
          <View className="bg-white rounded-t-3xl max-h-4/5">
            {/* Modal Header */}
            <View className="flex-row justify-between items-center px-6 py-4 border-b border-neutral-100">
              <Text className="text-xl font-semibold text-neutral-900">Filter Designs</Text>
              <TouchableOpacity 
                onPress={() => setShowFilters(false)}
                className="w-8 h-8 bg-neutral-100 rounded-full items-center justify-center"
              >
                <XMarkIcon size={18} color="#6b7280" />
              </TouchableOpacity>
            </View>
            
            <ScrollView className="flex-1 px-6 py-4" showsVerticalScrollIndicator={false}>
              {/* Style Filter */}
              <View className="mb-6">
                <Text className="font-semibold text-neutral-900 mb-3">Design Style</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-2">
                  <TouchableOpacity 
                    className={`px-4 py-2.5 rounded-xl mr-3 border ${
                      !selectedFilters.style 
                        ? 'bg-primary-600 border-primary-600' 
                        : 'bg-white border-neutral-200'
                    }`}
                    onPress={() => setSelectedFilters({...selectedFilters, style: ''})}
                  >
                    <Text className={`font-medium ${
                      !selectedFilters.style ? 'text-white' : 'text-neutral-700'
                    }`}>
                      All Styles
                    </Text>
                  </TouchableOpacity>
                  {designStyles.map(style => (
                    <TouchableOpacity 
                      key={style.id}
                      className={`px-4 py-2.5 rounded-xl mr-3 border ${
                        selectedFilters.style === style.name 
                          ? 'bg-primary-600 border-primary-600' 
                          : 'bg-white border-neutral-200'
                      }`}
                      onPress={() => setSelectedFilters({...selectedFilters, style: style.name})}
                    >
                      <Text className={`font-medium ${
                        selectedFilters.style === style.name ? 'text-white' : 'text-neutral-700'
                      }`}>
                        {style.name}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
              
              {/* Room Type Filter */}
              <View className="mb-8">
                <Text className="font-semibold text-neutral-900 mb-3">Room Type</Text>
                <View className="flex-row flex-wrap">
                  <TouchableOpacity 
                    className={`px-4 py-2.5 rounded-xl mr-2 mb-2 border ${
                      !selectedFilters.roomType 
                        ? 'bg-primary-600 border-primary-600' 
                        : 'bg-white border-neutral-200'
                    }`}
                    onPress={() => setSelectedFilters({...selectedFilters, roomType: ''})}
                  >
                    <Text className={`font-medium ${
                      !selectedFilters.roomType ? 'text-white' : 'text-neutral-700'
                    }`}>
                      All Rooms
                    </Text>
                  </TouchableOpacity>
                  {roomTypes.map(room => (
                    <TouchableOpacity 
                      key={room.id}
                      className={`px-4 py-2.5 rounded-xl mr-2 mb-2 border ${
                        selectedFilters.roomType === room.name 
                          ? 'bg-primary-600 border-primary-600' 
                          : 'bg-white border-neutral-200'
                      }`}
                      onPress={() => setSelectedFilters({...selectedFilters, roomType: room.name})}
                    >
                      <Text className={`font-medium ${
                        selectedFilters.roomType === room.name ? 'text-white' : 'text-neutral-700'
                      }`}>
                        {room.name}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </ScrollView>
            
            {/* Modal Footer */}
            <View className="px-6 py-4 border-t border-neutral-100">
              <View className="flex-row space-x-3">
                <TouchableOpacity 
                  onPress={clearFilters}
                  className="flex-1 bg-neutral-50 border border-neutral-200 py-3 px-4 rounded-xl"
                >
                  <Text className="text-neutral-700 font-medium text-center">Clear All</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => setShowFilters(false)}
                  className="flex-1 bg-primary-600 py-3 px-4 rounded-xl"
                >
                  <Text className="text-white font-medium text-center">
                    Show {filteredItems.length} Results
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      {/* Enhanced Image Detail Modal */}
      <Modal visible={!!selectedImage} transparent animationType="fade">
        <View className="flex-1 bg-black">
          {selectedImage && (
            <>
              <Image 
                source={{ uri: selectedImage.image }} 
                className="w-full h-3/5"
                resizeMode="cover"
              />
              
              {/* Header Actions */}
              <View className="absolute top-12 left-4 right-4 flex-row justify-between">
                <TouchableOpacity 
                  className="bg-black/70 backdrop-blur w-10 h-10 rounded-full items-center justify-center"
                  onPress={() => toggleFavorite(selectedImage.id)}
                >
                  {favorites.includes(selectedImage.id) ? (
                    <HeartSolid size={20} color="#ef4444" />
                  ) : (
                    <HeartIcon size={20} color="#fff" />
                  )}
                </TouchableOpacity>
                
                <TouchableOpacity 
                  className="bg-black/70 backdrop-blur w-10 h-10 rounded-full items-center justify-center"
                  onPress={() => setSelectedImage(null)}
                >
                  <XMarkIcon size={20} color="#fff" />
                </TouchableOpacity>
              </View>
              
              {/* Enhanced Bottom Sheet */}
              <View className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl">
                <View className="w-12 h-1 bg-neutral-300 rounded-full self-center mt-3 mb-6" />
                
                <View className="px-6 pb-6">
                  <View className="flex-row justify-between items-start mb-4">
                    <View className="flex-1 mr-4">
                      <Text className="text-2xl font-semibold text-neutral-900 mb-2">
                        {selectedImage.title}
                      </Text>
                      <View className="flex-row items-center">
                        <View className="bg-neutral-100 px-2 py-1 rounded-lg mr-2">
                          <Text className="text-neutral-700 text-sm font-medium">
                            {selectedImage.style}
                          </Text>
                        </View>
                        <View className="bg-neutral-100 px-2 py-1 rounded-lg">
                          <Text className="text-neutral-700 text-sm font-medium">
                            {selectedImage.roomType}
                          </Text>
                        </View>
                      </View>
                    </View>
                    
                    <View className="bg-primary-50 px-3 py-2 rounded-xl">
                      <Text className="text-primary-700 font-semibold text-sm">
                        {selectedImage.budgetRange}
                      </Text>
                    </View>
                  </View>
                  
                  <Text className="text-neutral-600 text-base leading-relaxed mb-6">
                    {selectedImage.description}
                  </Text>
                  
                  <View className="flex-row space-x-3">
                    <TouchableOpacity 
                      className="flex-1 bg-neutral-50 border border-neutral-200 py-3 px-4 rounded-xl flex-row items-center justify-center"
                      onPress={() => {}}
                    >
                      <BookmarkIcon size={18} color="#6b7280" />
                      <Text className="text-neutral-700 font-medium ml-2">Save</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                      className="flex-1 bg-primary-600 py-3 px-4 rounded-xl"
                      onPress={() => {
                        setSelectedImage(null);
                        navigation.navigate('AIDesign', { style: selectedImage.style });
                      }}
                    >
                      <Text className="text-white font-medium text-center">Use This Style</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </>
          )}
        </View>
      </Modal>
    </SafeAreaView>
  );
}