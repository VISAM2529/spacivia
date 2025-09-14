import { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Container } from 'components/Container';
import Header from 'components/ui/Header';
import Button from '../components/ui/Button';
import { designers } from '../data/mockData';
import { Image } from 'react-native';
import { CalendarIcon, ClockIcon, MapPinIcon } from 'react-native-heroicons/outline';

export default function AppointmentScreen({ navigation }: any) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedDesigner, setSelectedDesigner] = useState('');

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', 
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  const appointmentTypes = [
    { id: 'consultation', name: 'Initial Consultation', duration: '60 min' },
    { id: 'site-visit', name: 'Site Visit', duration: '90 min' },
    { id: 'design-review', name: 'Design Review', duration: '45 min' },
  ];

  return (
    <Container>
      <Header title="Book Appointment" />
      
      <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false}>
        <Text className="text-2xl font-serif font-bold text-primary-800 mb-2">
          Schedule a Meeting
        </Text>
        <Text className="text-neutral-600 mb-6">
          Book a consultation with our design experts
        </Text>

        {/* Appointment Type */}
        <View className="mb-8">
          <Text className="text-lg font-semibold text-neutral-800 mb-3">Appointment Type</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-4">
            {appointmentTypes.map(type => (
              <TouchableOpacity
                key={type.id}
                className="bg-white p-4 rounded-2xl mr-4 shadow-sm min-w-[140px]"
              >
                <Text className="font-semibold text-neutral-800 mb-1">{type.name}</Text>
                <Text className="text-neutral-500 text-sm">{type.duration}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Designer Selection */}
        <View className="mb-8">
          <Text className="text-lg font-semibold text-neutral-800 mb-3">Choose a Designer</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {designers.map(designer => (
              <TouchableOpacity
                key={designer.id}
                className="bg-white p-4 rounded-2xl mr-4 items-center shadow-sm w-40"
                onPress={() => setSelectedDesigner(designer.id)}
              >
                <View className="w-16 h-16 rounded-full bg-gray-200 mb-3 overflow-hidden">
                  <Image 
                    source={{ uri: designer.image }} 
                    className="w-full h-full"
                  />
                </View>
                <Text className="font-semibold text-neutral-800 text-center mb-1">
                  {designer.name}
                </Text>
                <Text className="text-primary-600 text-xs text-center mb-2">
                  {designer.specialty}
                </Text>
                <View className="flex-row items-center">
                  <Text className="text-yellow-500">★</Text>
                  <Text className="text-neutral-600 text-xs ml-1">
                    {designer.rating} ({designer.reviews})
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Date Selection */}
        <View className="mb-8">
          <Text className="text-lg font-semibold text-neutral-800 mb-3">Select Date</Text>
          <View className="bg-white p-4 rounded-2xl shadow-sm">
            <View className="flex-row items-center justify-between mb-4">
              <Text className="font-semibold text-neutral-800">November 2023</Text>
              <View className="flex-row">
                <TouchableOpacity className="p-2">
                  <Text>←</Text>
                </TouchableOpacity>
                <TouchableOpacity className="p-2">
                  <Text>→</Text>
                </TouchableOpacity>
              </View>
            </View>
            
            <View className="flex-row justify-between mb-2">
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
                <Text key={day} className="text-neutral-500 text-center w-10">
                  {day}
                </Text>
              ))}
            </View>
            
            <View className="flex-row flex-wrap">
              {[].concat(...Array(35).fill(0).map((_, i) => (
                <TouchableOpacity
                  key={i}
                  className={`w-10 h-10 items-center justify-center rounded-full m-1 ${i === 15 ? 'bg-primary-600' : ''}`}
                >
                  <Text className={i === 15 ? 'text-white' : 'text-neutral-800'}>
                    {i - 3 + 1}
                  </Text>
                </TouchableOpacity>
              )))}
            </View>
          </View>
        </View>

        {/* Time Selection */}
        <View className="mb-8">
          <Text className="text-lg font-semibold text-neutral-800 mb-3">Select Time</Text>
          <View className="flex-row flex-wrap">
            {timeSlots.map(time => (
              <TouchableOpacity
                key={time}
                className={`p-3 rounded-xl m-1 ${selectedTime === time ? 'bg-primary-600' : 'bg-white shadow-sm'}`}
                onPress={() => setSelectedTime(time)}
              >
                <Text className={selectedTime === time ? 'text-white' : 'text-neutral-800'}>
                  {time}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Location */}
        <View className="mb-8">
          <Text className="text-lg font-semibold text-neutral-800 mb-3">Location</Text>
          <View className="flex-row bg-white p-4 rounded-2xl shadow-sm">
            <MapPinIcon size={20} color="#c19d78" />
            <View className="ml-3">
              <Text className="font-semibold text-neutral-800">Video Consultation</Text>
              <Text className="text-neutral-600 text-sm">Join via Google Meet</Text>
            </View>
          </View>
        </View>

        {/* Book Button */}
        <Button
          title="Book Appointment"
          onPress={() => {}}
          variant="primary"
          size="lg"
          className="mb-10"
        />
      </ScrollView>
    </Container>
  );
}