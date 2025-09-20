// src/types/sanity.ts

import type { Slug } from "sanity";

// A reusable type for Sanity image objects
export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

export interface SocialLink  {
  _type: 'object';
  platform: string;
  url: string;
}

export interface Technologies  {
  _type: 'object';
  skill: string;
}

export interface ProjectGalery  {
  _type: 'object';
  image: SanityImage;
}

export interface PageInfo {
  name: string;
  callName: string;
  heroTitle: string;
  heroList: string;
  bio: string;
  profileImage: SanityImage; // Add this line
  backroundImage: SanityImage;
  birthday: string;
  age: number;
  email:string;
  phone: string;
  degree: string;
  city: string;
  socialLinks: SocialLink [];
}

export interface Skill {
  name: string;
  logo: SanityImage;
}

export interface Education {
  institutionname: string;
  major: string;
  degree:string;
  graduationDate: string;
}

export interface WorkExp {
  role: string;
  companyName: string;
  startDate:Date;
  endDate: Date;
  description: Text;
}

export interface Project {
  title: string;
  slug: Slug;
  category: string;
  client: string;
  projectDate:Date;
  mainImage: SanityImage;
  imageText: string;
  gallery: ProjectGalery;
  videourl: URL;
  description: Text;
  tech: Technologies;
  githuburl: URL;
}