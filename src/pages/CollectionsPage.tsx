import { useState } from "react";
import Navigation from "@/components/ecommerce/Navigation";
import Footer from "@/components/ecommerce/Footer";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";

const CollectionsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all");

  const products = [
    { id: 1, name: "Executive Oxford", category: "business", price: 299, image: "👞" },
    { id: 2, name: "Classic Loafer", category: "business", price: 259, image: "👞" },
    { id: 3, name: "Casual Sneaker", category: "casual", price: 179, image: "👟" },
    { id: 4, name: "Derby Dress Shoe", category: "formal", price: 329, image: "👞" },
    { id: 5, name: "Monk Strap", category: "business", price: 289, image: "👞" },
    { id: 6, name: "Chelsea Boot", category: "casual", price: 249, image: "🥾" },
    { id: 7, name: "Patent Leather Oxford", category: "formal", price: 349, image: "👞" },
    { id: 8, name: "Suede Loafer", category: "casual", price: 199, image: "👞" },
  ];

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === "all" || product.category === selectedCategory;
    const priceMatch = priceRange === "all" || 
      (priceRange === "low" && product.price < 200) ||
      (priceRange === "mid" && product.price >= 200 && product.price < 300) ||
      (priceRange === "high" && product.price >= 300);
    return categoryMatch && priceMatch;
  });

  return (
    <div className="min-h-screen font-body">
      <Navigation />
      
      <section className="section-padding bg-neutral">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="font-heading text-primary mb-4">Our Collections</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our curated selection of premium footwear crafted for excellence
            </p>
          </div>

          {/* Filters */}
          <div className="bg-card rounded-lg shadow-soft p-6 mb-12">
            <div className="flex items-center gap-2 mb-6">
              <SlidersHorizontal className="w-5 h-5 text-primary" />
              <h3 className="font-heading text-lg text-primary">Filters</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-3 uppercase tracking-wider">
                  Category
                </label>
                <div className="flex flex-wrap gap-2">
                  {["all", "business", "casual", "formal"].map((cat) => (
                    <Button
                      key={cat}
                      variant={selectedCategory === cat ? "default" : "outline"}
                      onClick={() => setSelectedCategory(cat)}
                      className={selectedCategory === cat ? "btn-primary" : ""}
                    >
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-3 uppercase tracking-wider">
                  Price Range
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    { value: "all", label: "All Prices" },
                    { value: "low", label: "Under $200" },
                    { value: "mid", label: "$200 - $300" },
                    { value: "high", label: "$300+" }
                  ].map((range) => (
                    <Button
                      key={range.value}
                      variant={priceRange === range.value ? "default" : "outline"}
                      onClick={() => setPriceRange(range.value)}
                      className={priceRange === range.value ? "btn-primary" : ""}
                    >
                      {range.label}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card group">
                <div className="aspect-square bg-neutral flex items-center justify-center text-8xl">
                  {product.image}
                </div>
                <div className="p-6 space-y-3">
                  <div className="text-xs uppercase tracking-widest text-secondary font-medium">
                    {product.category}
                  </div>
                  <h3 className="font-heading text-xl text-primary group-hover:text-secondary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-2xl font-semibold text-foreground">
                    ${product.price}
                  </p>
                  <Button className="w-full btn-primary">
                    VIEW DETAILS
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CollectionsPage;
