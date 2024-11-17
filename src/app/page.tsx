import React from 'react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Image from 'next/image';
import MaxWidthWrapper from '@/components/common/MaxWidthWrapper';

const HeroSection = () => {
  return (
    <MaxWidthWrapper className="mx-auto px-4 sm:px-6 lg:px-8 mt-8 md:mt-12">
      <div className="relative isolate overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 sm:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left content */}
            <div className="flex flex-col items-center md:items-start space-y-6">
              <Badge variant="outline" className="bg-orange-50 text-orange-600 hover:bg-orange-100 border-orange-200">
                AI-Powered Conversations
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-center md:text-left">
                Learn By{" "}
                <span className="relative inline-block">
                  Conversing
                  <span className="absolute -bottom-2 left-0 right-0 h-3 bg-orange-200 -rotate-2 -z-10" />
                </span>
              </h1>
              
              <p className="text-lg text-gray-600 text-center md:text-left max-w-lg">
                Master any language naturally with our AI chatbots. Get instant feedback as you write and chat.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg hover:shadow-xl transition-all">
                  Start Chatting Now
                </Button>
                
                <Button variant="ghost" size="lg" className="group">
                  <Card className="w-10 h-10 flex items-center justify-center mr-2 group-hover:bg-indigo-50 transition-colors">
                    <Play className="w-5 h-5 text-indigo-600" />
                  </Card>
                  See how it works
                </Button>
              </div>
            </div>
            
            {/* Right content - Image */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-orange-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
              <div className="relative">
                <Image
                  src="/class.jpeg"
                  alt="classroom"
                  width={400}
                  height={400}
                  className="relative z-10 rounded-2xl shadow-2xl transform hover:rotate-2 transition-transform duration-300 w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default HeroSection;