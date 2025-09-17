"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Users,
  Brain,
  Code,
  Lightbulb,
  Network,
  MessageSquare,
} from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800/50">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/techbyte-logo.png"
                alt="TechByte Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
              <span className="text-2xl font-bold text-white">TechByte</span>
            </div>
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() =>
                window.open("https://discord.gg/QFRc3cXAqP", "_blank")
              }
            >
              Join Community
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              The Road to Big Tech,
            </span>
            <br />
            One Byte at a Time!
          </h1>
          <div className="container mx-auto px-4 pb-8 flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
              <iframe
                src="https://aicards.io/embed/cardchat/a797c05d-9fbb-4465-9123-7a48496c0327"
                style={{
                  border: 0,
                  width: "319px",
                  height: "512px",
                  borderRadius: "16px",
                }}
                allow="web-share; clipboard-write; microphone"
                loading="lazy"
                scrolling="no"
              />
              <iframe
                src="https://aicards.io/embed/cardchat/49484639-629e-4138-a9b0-fbdd1e58c0c3"
                style={{
                  border: 0,
                  width: "319px",
                  height: "512px",
                  borderRadius: "16px",
                }}
                allow="web-share; clipboard-write; microphone"
                loading="lazy"
                scrolling="no"
              />
            </div>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            A vibrant, dynamic community for engineers passionate about tech and
            AI, fostering knowledge sharing and professional growth for all
            experience levels.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-8 py-4"
            onClick={() =>
              window.open("https://discord.gg/QFRc3cXAqP", "_blank")
            }
          >
            Join Us Today!
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* AI Cards Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Our Unique Approach
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed">
              Unlock Knowledge with aiCards: Our creative approach to knowledge
              sharing. Members create and share insightful content using
              aicards.io, transforming complex engineering concepts into
              concise, engaging, and easily digestible formats that promote
              efficient learning and effective knowledge exchange.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-slate-700">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="flex flex-col h-full">
                <div className="text-center mb-8">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-6 text-white">
                    <Brain className="h-16 w-16 mx-auto mb-4" />
                    <h4 className="text-xl font-bold mb-2">
                      AI-Powered Learning
                    </h4>
                    <p className="text-sm opacity-90">
                      Transform knowledge into actionable insights
                    </p>
                  </div>
                </div>
                <div className="flex-grow" />
                <h3 className="text-2xl font-bold text-white mb-4">
                  How AI Cards Work
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <Code className="h-5 w-5 text-blue-400 mt-1 mr-3 flex-shrink-0" />
                    <span>
                      Create concise, visual explanations of complex technical
                      concepts
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Lightbulb className="h-5 w-5 text-purple-400 mt-1 mr-3 flex-shrink-0" />
                    <span>
                      Share insights in an engaging, easily digestible format
                    </span>
                  </li>
                  <li className="flex items-start">
                    <MessageSquare className="h-5 w-5 text-cyan-400 mt-1 mr-3 flex-shrink-0" />
                    <span>Foster discussions and collaborative learning</span>
                  </li>
                </ul>
                <Button
                  className="mt-6 bg-purple-600 hover:bg-purple-700 text-white"
                  onClick={() => window.open("https://aicards.io", "_blank")}
                >
                  Learn More About AI Cards
                </Button>
              </div>
              <div className="container mx-auto flex justify-center">
                <iframe
                  src="https://aicards.io/embed/cardchat/3187e064-79b5-4a72-919c-7d188ae23c6d"
                  style={{
                    border: 0,
                    width: "319px",
                    height: "512px",
                    borderRadius: "16px",
                  }}
                  allow="web-share; clipboard-write; microphone"
                  loading="lazy"
                  scrolling="no"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About TechByte Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Your Hub for Tech & AI Growth
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-12">
            TechByte's core mission is fostering a collaborative environment
            where knowledge sharing and professional growth thrive. We believe
            in the power of community-driven learning, where engineers of all
            backgrounds—from curious beginners to seasoned experts—come together
            to push the boundaries of technology and artificial intelligence.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <CardTitle className="text-white">
                  Inclusive Community
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Welcome engineers at all experience levels in a supportive
                  environment
                </p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <Brain className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <CardTitle className="text-white">Knowledge Sharing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Transform complex ideas into digestible insights through
                  collaboration
                </p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <Network className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                <CardTitle className="text-white">
                  Professional Growth
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Accelerate your career through mentorship and peer learning
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Content & Topics Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Explore Cutting-Edge Tech & AI Insights
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <Badge className="w-fit bg-blue-600 text-white mb-2">
                  Deep Dives
                </Badge>
                <CardTitle className="text-white text-xl">
                  Engineering Challenges
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Tackle complex problems with expert insights
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-300">
                <ul className="space-y-2">
                  <li>• Undo/Redo Optimization (Google Docs, VS Code)</li>
                  <li>• Conflict Resolution (OT, CRDT approaches)</li>
                  <li>• Performance optimization strategies</li>
                  <li>• Scalability patterns and solutions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <Badge className="w-fit bg-purple-600 text-white mb-2">
                  Architecture
                </Badge>
                <CardTitle className="text-white text-xl">
                  Modern System Design
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Learn from real-world implementations
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-300">
                <ul className="space-y-2">
                  <li>• Rendering Solutions for Collaborative Editing</li>
                  <li>• Beautifully crafted chat system design</li>
                  <li>• Stateless REST & WebSocket integration</li>
                  <li>• High-throughput storage solutions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <Badge className="w-fit bg-cyan-600 text-white mb-2">
                  Network
                </Badge>
                <CardTitle className="text-white text-xl">
                  Professional Growth
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Connect and grow with peers
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-300">
                <ul className="space-y-2">
                  <li>• Peer-to-peer learning opportunities</li>
                  <li>• Mentorship programs</li>
                  <li>• Career advancement strategies</li>
                  <li>• Industry networking events</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <Badge className="w-fit bg-green-600 text-white mb-2">
                  Guidance
                </Badge>
                <CardTitle className="text-white text-xl">
                  Professional Advice
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Get support from experienced engineers
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-300">
                <ul className="space-y-2">
                  <li>• Code review and feedback</li>
                  <li>• Career transition guidance</li>
                  <li>• Technical interview preparation</li>
                  <li>• Industry best practices</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community & Growth Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Grow With a Supportive Network
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-12">
            TechByte is more than just a community—it's a professional network
            dedicated to individual and collective growth. We harness the
            transformative power of peer-to-peer learning and mentorship,
            creating an environment where every member can thrive, contribute,
            and advance their career in technology.
          </p>

          <div className="relative">
            <Image
              src="/images/community-banner.png"
              alt="TechByte Community"
              width={800}
              height={400}
              className="rounded-2xl mx-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent rounded-2xl flex items-end justify-center pb-8">
              <div className="text-center">
                <p className="text-gray-300">
                  Create your AI profile Card and join us today!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Join TechByte?
          </h2>
          <div className="container mx-auto px-4 pb-8 flex justify-center">
            <iframe
              src="https://aicards.io/embed/cardchat/f11f7b8d-3d54-4fa5-b832-feabc1aa34e9"
              style={{
                border: 0,
                width: "319px",
                height: "512px",
                borderRadius: "16px",
              }}
              allow="web-share; clipboard-write; microphone"
              loading="lazy"
              scrolling="no"
            />
          </div>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            TechByte is where your passion for tech meets a supportive community
            ready to help you thrive. Whether you're just starting your journey
            or you're a seasoned expert looking to share knowledge, there's a
            place for you here.
          </p>

          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-8 py-4 w-full sm:w-auto"
              onClick={() =>
                window.open("https://discord.gg/QFRc3cXAqP", "_blank")
              }
            >
              Join Us Today!
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-600 text-white hover:bg-gray-800 text-lg px-8 py-4 w-full sm:w-auto bg-transparent"
              onClick={() => window.open("https://aicards.io", "_blank")}
            >
              Start Creating, Sharing, and Growing!
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-900/50">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Image
                src="/images/techbyte-logo.png"
                alt="TechByte Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-xl font-bold text-white">
                TechByte.cards
              </span>
            </div>
            <div className="text-gray-400 text-center md:text-right">
              <p>© 2024 TechByte Community. Empowering engineers worldwide.</p>
              <p className="text-sm mt-1">
                Built with passion for technology and growth.
              </p>
              <p className="text-sm mt-1">
                Made in partnership with{" "}
                <a
                  className="underline"
                  href="https://aicards.io"
                  target="_blank"
                  rel="noreferrer"
                >
                  aiCards.io
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
