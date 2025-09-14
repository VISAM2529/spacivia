import { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
import { Container } from 'components/Container';
import Header from 'components/ui/Header';
import Button from '../components/ui/Button';
import { galleryItems, designStyles, roomTypes } from '../data/mockData';
import { FunnelIcon, MagnifyingGlassIcon, ShoppingCartIcon } from 'react-native-heroicons/outline';

export default function CatalogScreen({ navigation }: any) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'furniture', name: 'Furniture' },
    { id: 'lighting', name: 'Lighting' },
    { id: 'decor', name: 'Decor' },
    { id: 'textiles', name: 'Textiles' },
  ];

  const products = [
    {
      id: '1',
      name: 'Modern Sofa',
      description: 'Contemporary 3-seater sofa with clean lines',
      price: 1299,
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=300&fit=crop',
      category: 'furniture',
      style: 'Modern',
      inStock: true,
    },
    {
      id: '2',
      name: 'Scandinavian Chair',
      description: 'Minimalist wooden chair with wool upholstery',
      price: 299,
      image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=300&h=300&fit=crop',
      category: 'furniture',
      style: 'Scandinavian',
      inStock: true,
    },
    {
      id: '3',
      name: 'Industrial Pendant Light',
      description: 'Metal pendant light with Edison bulb',
      price: 189,
      image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=300&h=300&fit=crop',
      category: 'lighting',
      style: 'Industrial',
      inStock: true,
    },
    {
      id: '4',
      name: 'Bohemian Rug',
      description: 'Handwoven rug with ethnic patterns',
      price: 459,
      image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=300&h=300&fit=crop',
      category: 'textiles',
      style: 'Bohemian',
      inStock: false,
    },
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <Container>
      <Header 
        title="Catalog" 
        showSearch={true}
        onSearchPress={() => {}} 
      />
      
      <View className="flex-1 px-5">
        {/* Categories */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          className="mb-6 mt-4"
        >
          {categories.map(category => (
            <TouchableOpacity
              key={category.id}
              className={`px-4 py-2 rounded-full mr-2 ${selectedCategory === category.id ? 'bg-primary-600' : 'bg-neutral-200'}`}
              onPress={() => setSelectedCategory(category.id)}
            >
              <Text className={selectedCategory === category.id ? 'text-white' : 'text-neutral-700'}>
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Products Grid */}
        <FlatList
          data={filteredProducts}
          numColumns={2}
          keyExtractor={item => item.id}
          contentContainerStyle={{ paddingBottom: 20 }}
          renderItem={({ item }) => (
            <TouchableOpacity 
              className="w-1/2 p-2"
              onPress={() => navigation.navigate('ProductDetail', { product: item })}
            >
              <View className="bg-white rounded-2xl p-3 shadow-sm">
                <Image 
                  source={{ uri: item.image }} 
                  className="w-full h-40 rounded-xl mb-3"
                  resizeMode="cover"
                />
                
                <Text className="font-semibold text-neutral-800 mb-1" numberOfLines={1}>
                  {item.name}
                </Text>
                <Text className="text-neutral-600 text-sm mb-2" numberOfLines={2}>
                  {item.description}
                </Text>
                
                <View className="flex-row justify-between items-center">
                  <Text className="font-bold text-primary-800">${item.price}</Text>
                  <TouchableOpacity className="bg-primary-100 p-2 rounded-full">
                    <ShoppingCartIcon size={16} color="#c19d78" />
                  </TouchableOpacity>
                </View>
                
                {!item.inStock && (
                  <Text className="text-red-600 text-xs mt-2">Out of Stock</Text>
                )}
              </View>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Floating Cart Button */}
      <View className="absolute bottom-6 right-6">
        <Button
          title="View Cart"
          onPress={() => {}}
          variant="primary"
          size="md"
          icon={<ShoppingCartIcon size={16} color="#fff" />}
        />
      </View>
    </Container>
  );
}