// src/types/sanity.ts
import type { PortableTextBlock } from '@portabletext/types';
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
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

export interface SkillReference {
  _id: string;
  name: string;
}

export interface Technologies  {
  _type: 'object';
  tech: SkillReference;
  techDescription: string;
}

export interface ProjectGalery  {
  _type: 'object';
  projectgallery: SanityImage;
  alt: 'string'
}

export interface PageInfo {
  name: string;
  callname: string;
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
  description: PortableTextBlock[];
}

export interface Project {
  title: string;
  slug: {
    _type: 'slug';
    current: string;
  };
  category: string;
  client: string;
  projectDate:Date;
  mainImage: SanityImage;
  imageText: string;
  gallery: ProjectGalery[];
  videourl: URL;
  descriptions: PortableTextBlock[];
  tech: Technologies [];
  githuburl: URL;
}

export interface Certificate {
  name: string;
  category: string;
  issuingOrganization: string;
  dateIssued:Date;
  credentialUrl: URL;
  certificateFile: File;
  previewImage: SanityImage;
}