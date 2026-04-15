import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        // Ganti warna tint menjadi hardcoded #1A237E
        tabBarActiveTintColor: '#1A237E',
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
          href: null,
        }}
      />

      <Tabs.Screen
        name="praktikum"
        options={{
          title: 'Praktikum',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="graduationcap.fill" color={color} />,
        }}
      />

      <Tabs.Screen
        name="modul"
        options={{
          title: 'Modul',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="folder.fill" color={color} />,
        }}
      />

      <Tabs.Screen
        name="mahasiswa-cloud"
        options={{
          title: 'Cloud',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="cloud.fill" color={color} />,
        }}
      />

      <Tabs.Screen
        name="logout"
        options={{
          title: 'Logout',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="rectangle.portrait.and.arrow.right" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}