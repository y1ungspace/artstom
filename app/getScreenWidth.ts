'use client';

export function getScreenWidth() {
  if (typeof window !== 'undefined') {
    return window.screen.width
  }
  return 1440 //defalut
} 
