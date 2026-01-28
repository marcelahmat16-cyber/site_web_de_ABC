
// Import React to provide the React namespace for type definitions like ReactNode
import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Partner {
  name: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface ContactInfo {
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  phones: string[];
  email: string;
}
