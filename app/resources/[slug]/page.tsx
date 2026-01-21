import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { SocialSidebar } from "@/components/social-sidebar"
import { ContactSidebar } from "@/components/contact-sidebar"
import { Footer } from "@/components/footer"
import { ArticleHero } from "@/components/resources/detail/article-hero"
import { ArticleContent } from "@/components/resources/detail/article-content"
import { AuthorSection } from "@/components/resources/detail/author-section"
import { RelatedArticles } from "@/components/resources/detail/related-articles"
import { BlogCta } from "@/components/resources/detail/blog-cta"
import { getPostBySlug, blogPosts } from "@/lib/blog-data"

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  
  if (!post) {
    return {
      title: "Article Not Found | Permus Resources",
    }
  }

  return {
    title: `${post.title} | Permus Resources`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishDate,
      authors: [post.author.name],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  }
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-midnight-navy">
      <Navigation />
      <SocialSidebar />
      <ContactSidebar />
      
      <ArticleHero post={post} />
      <ArticleContent post={post} />
      <AuthorSection author={post.author} />
      <RelatedArticles currentSlug={post.slug} category={post.category} />
      <BlogCta />
      
      <Footer />
    </main>
  )
}
