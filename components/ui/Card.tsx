
import { View, Text, Image, TouchableOpacity } from 'react-native';

interface CardProps {
  title: string;
  description?: string;
  image?: string;
  onPress?: () => void;
  className?: string;
  children?: React.ReactNode;
}

export default function Card({ title, description, image, onPress, className = '', children }: CardProps) {
  return (
    <TouchableOpacity 
      onPress={onPress}
      className={`bg-white rounded-2xl shadow-sm overflow-hidden ${className}`}
      activeOpacity={0.7}
    >
      {image && (
        <Image 
          source={{ uri: image }} 
          className="w-full h-40" 
          resizeMode="cover"
        />
      )}
      <View className="p-4">
        <Text className="text-lg font-semibold text-neutral-800 mb-1" numberOfLines={1}>
          {title}
        </Text>
        {description && (
          <Text className="text-neutral-500 text-sm" numberOfLines={2}>
            {description}
          </Text>
        )}
        {children}
      </View>
    </TouchableOpacity>
  );
}