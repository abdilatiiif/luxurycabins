import { Button } from "@/components/ui/button";
import { Home as HomeIcon, Menu } from "lucide-react";
import Image from "next/image";

export default function Home() {
  console.log("Home page rendered");

  return (
    <div className="min-h-screen bg-background">
      {" "}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a1410]/95 backdrop-blur-sm border-b border-[#3d2e1f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <HomeIcon className="w-6 h-6 text-[#d4a574]" />
                <span className="text-xl font-bold text-white tracking-wider">
                  LUXCABY
                </span>
              </div>
              <nav className="hidden md:flex space-x-6">
                <a
                  href="#"
                  className="text-[#c9b89a] hover:text-white transition"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-[#c9b89a] hover:text-white transition"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-[#c9b89a] hover:text-white transition"
                >
                  Cabins
                </a>
                <a
                  href="#"
                  className="text-[#c9b89a] hover:text-white transition"
                >
                  Contact
                </a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-[#c9b89a] hover:text-white"
              ></Button>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-[#c9b89a] hover:text-white"
              >
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>
      <section className="relative h-[600px] mt-16">
        <div className="absolute inset-0">
          <Image
            src={
              "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=1600"
            }
            alt="Mountain Landscape"
            width={1600}
            height={600}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1410]/70 via-[#1a1410]/50 to-background"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Escape From The Hustle Bustle Of City
            </h1>
            <p className="text-xl text-[#c9b89a] mb-8">
              Discover your perfect retreat in the heart of nature
            </p>
            <Button
              size="lg"
              className="bg-[#6b4423] hover:bg-[#8b5a2b] text-white px-8 py-6 text-lg"
            >
              Explore Cabins
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

/**  <section className="py-20 bg-gradient-to-b from-background to-[#e8dcc8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-[#d4a574] text-white">
              About Us
            </Badge>
            <h2 className="text-4xl font-bold text-[#3d2e1f] mb-4">
              Enjoy A Simpler Way Of Living
            </h2>
            <p className="text-lg text-[#6b5447] max-w-2xl mx-auto">
              We provide service for peaceful and comfortable cabin experiences
              in natures embrace
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
            {[
              {
                icon: Home,
                title: "Cozy Interiors",
                desc: "Warm and inviting spaces",
              },
              {
                icon: MapPin,
                title: "Prime Locations",
                desc: "Surrounded by natural beauty",
              },
              {
                icon: Wifi,
                title: "Modern Amenities",
                desc: "All the comforts you need",
              },
              {
                icon: Users,
                title: "Perfect for Groups",
                desc: "Space for everyone",
              },
            ].map((item, idx) => (
              <Card
                key={idx}
                className="bg-white/80 backdrop-blur border-[#d4a574]/30 hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-[#6b4423]/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-[#6b4423]" />
                  </div>
                  <h3 className="font-semibold text-[#3d2e1f] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#6b5447]">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
            {[
              { value: "+80", label: "Happy Guests" },
              { value: "+100", label: "Nights Booked" },
              { value: "+30", label: "Locations" },
              { value: "+50", label: "5-Star Reviews" },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-5xl font-bold text-[#6b4423] mb-2">
                  {stat.value}
                </div>
                <div className="text-[#6b5447] font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */
