
import React from 'react';
import { Settings, Zap, Wrench, Shield, Users, Trophy } from 'lucide-react';
import { NavItem, ServiceItem, Partner, ContactInfo, Testimonial } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'À Propos', href: '#a-propos' },
  { label: 'Services', href: '#services' },
  { label: 'Réalisations', href: '#galerie' },
  { label: 'Témoignages', href: '#temoignages' },
  { label: 'Partenaires', href: '#partenaires' },
  { label: 'Contact', href: '#contact' },
];

export const STATS = [
  { label: "Années d'Expérience", value: "17+", icon: <Trophy className="w-5 h-5" /> },
  { label: "Moteurs Réparés", value: "5000+", icon: <Zap className="w-5 h-5" /> },
  { label: "Partenaires Privés", value: "12+", icon: <Users className="w-5 h-5" /> },
  { label: "Satisfaction Client", value: "98%", icon: <Shield className="w-5 h-5" /> },
];

export interface ExtendedServiceItem extends ServiceItem {
  imageUrl: string;
}

export const SERVICES: ExtendedServiceItem[] = [
  {
    title: 'Bobinage Électrique',
    description: 'Réparation et fabrication de haute précision pour moteurs et alternateurs industriels de toutes puissances.',
    icon: <Zap className="w-8 h-8 text-blue-600" />,
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Pièces de Rechange',
    description: 'Boutique spécialisée offrant des composants certifiés et durables pour vos installations critiques.',
    icon: <Settings className="w-8 h-8 text-blue-600" />,
    imageUrl: 'https://images.unsplash.com/photo-1530124560612-3f9622d79ef0?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Audit & Maintenance',
    description: 'Analyses thermographiques et interventions préventives pour éviter tout arrêt de production.',
    icon: <Wrench className="w-8 h-8 text-blue-600" />,
    imageUrl: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800',
  },
];

export const GALLERY_IMAGES = [
  { url: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=600', title: 'Maintenance Industrielle' },
  { url: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=600', title: 'Atelier de Bobinage' },
  { url: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600', title: 'Composants Électriques' },
  { url: 'https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=600', title: 'Contrôle Technique' },
  { url: 'https://images.unsplash.com/photo-1621905235858-a883002237b6?auto=format&fit=crop&q=80&w=600', title: 'Moteur en Réparation' },
  { url: 'https://images.unsplash.com/photo-1454165833222-3870d516b922?auto=format&fit=crop&q=80&w=600', title: 'Expertise Technique' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Le travail de bobinage réalisé sur nos générateurs a dépassé nos attentes. Un professionnalisme et une rapidité remarquables pour nos opérations critiques.",
    author: "Jean-Marc D.",
    role: "Directeur Technique",
    company: "BDT Tchad"
  },
  {
    quote: "Un partenaire fiable depuis plus de 10 ans. La qualité des pièces de rechange et la pertinence du conseil technique sont leurs grandes forces.",
    author: "Amina K.",
    role: "Responsable Maintenance",
    company: "TchadElec"
  },
  {
    quote: "Intervention urgente réussie en un temps record. Grâce à l'équipe technique d'ABC, notre chaîne de production n'a subi aucune interruption majeure.",
    author: "Marc T.",
    role: "Ingénieur de Production",
    company: "CIMAF"
  }
];

export const PARTNERS: Partner[] = [
  { name: 'Les Boissons Rafraîchissantes Du Tchad (BDT)' },
  { name: 'TchadElec' },
  { name: 'CIMAF-Tchad' },
  { name: 'RAZEL-Tchad' },
  { name: 'Arab Contractor' },
  { name: 'Tractafric Equipements' },
  { name: 'CGCOC' },
  { name: 'SOPEIN-T' },
  { name: 'EXCEL' },
  { name: 'SOBOIS-T' },
  { name: 'S3C' },
  { name: 'SOPRA-T' },
];

export const CONTACT_DATA: ContactInfo = {
  address: 'Avenue Nelson Mandela à Farcha, N\'Djamena, Tchad',
  coordinates: {
    lat: 12.127782,
    lng: 14.985429,
  },
  phones: ['+235 63113764', '+235 93085084'],
  email: 'acb.equipro@gmail.com',
};
