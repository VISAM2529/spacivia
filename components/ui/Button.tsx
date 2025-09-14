import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  className?: string;
}

export default function Button({ 
  title, 
  onPress, 
  variant = 'primary', 
  size = 'md', 
  disabled = false, 
  loading = false,
  className = '' 
}: ButtonProps) {
  const baseClasses = "rounded-xl justify-center items-center shadow-sm";
  
  const variantClasses = {
    primary: "bg-primary-600",
    secondary: "bg-accent-600",
    outline: "bg-transparent border border-neutral-300"
  };
  
  const sizeClasses = {
    sm: "py-2 px-4",
    md: "py-3 px-6",
    lg: "py-4 px-8"
  };
  
  const textSizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg"
  };
  
  const textColorClasses = {
    primary: "text-white",
    secondary: "text-white",
    outline: "text-neutral-700"
  };
  
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabled ? 'opacity-50' : ''} ${className}`}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'outline' ? '#4e4e4e' : '#fff'} />
      ) : (
        <Text className={`font-semibold ${textSizeClasses[size]} ${textColorClasses[variant]}`}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}