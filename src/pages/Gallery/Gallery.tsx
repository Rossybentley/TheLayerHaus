import Layout from "../../components/layout/Layout/Layout";
import GalleryHero from "../../components/gallery/GalleryHero/GalleryHero";
import GalleryGrid from "../../components/gallery/GalleryGrid/GalleryGrid";
import InstagramCTA from "../../components/gallery/InstagramCTA/InstagramCTA";
import SEO from "../../components/common/SEO/SEO";
const Gallery = () => {
  return (
    <Layout>
      <SEO
        title="Interior Design Gallery"
        description="Browse The Layer Haus gallery for inspiration featuring luxury curtains, blinds, wallpapers and beautifully styled interiors."
        path="/gallery"
      />
      <GalleryHero />

      <GalleryGrid />

      <InstagramCTA />
    </Layout>
  );
};

export default Gallery;
