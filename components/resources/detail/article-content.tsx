"use client"

import React from "react"

import type { BlogPost } from "@/lib/blog-data"

interface ArticleContentProps {
  post: BlogPost
}

export function ArticleContent({ post }: ArticleContentProps) {
  // Simple markdown-like rendering for the content
  const renderContent = (content: string) => {
    const lines = content.trim().split('\n')
    const elements: React.ReactNode[] = []
    let currentList: string[] = []
    let inBlockquote = false
    let blockquoteContent = ''

    const flushList = () => {
      if (currentList.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="list-disc list-inside space-y-2 mb-6 text-interface-grey/80 ml-4">
            {currentList.map((item, i) => (
              <li key={i} className="leading-relaxed">{item}</li>
            ))}
          </ul>
        )
        currentList = []
      }
    }

    const flushBlockquote = () => {
      if (blockquoteContent) {
        elements.push(
          <blockquote key={`quote-${elements.length}`} className="border-l-4 border-electric-violet pl-6 py-2 my-8 italic text-interface-grey/70 text-lg">
            {blockquoteContent.trim()}
          </blockquote>
        )
        blockquoteContent = ''
        inBlockquote = false
      }
    }

    lines.forEach((line, index) => {
      const trimmedLine = line.trim()

      // Skip empty lines but flush pending elements
      if (!trimmedLine) {
        flushList()
        flushBlockquote()
        return
      }

      // Blockquote
      if (trimmedLine.startsWith('>')) {
        flushList()
        inBlockquote = true
        blockquoteContent += trimmedLine.slice(1).trim() + ' '
        return
      }

      if (inBlockquote) {
        flushBlockquote()
      }

      // H2 heading
      if (trimmedLine.startsWith('## ')) {
        flushList()
        elements.push(
          <h2 key={`h2-${index}`} className="font-serif text-2xl md:text-3xl font-bold text-interface-grey mt-12 mb-6">
            {trimmedLine.slice(3)}
          </h2>
        )
        return
      }

      // H3 heading
      if (trimmedLine.startsWith('### ')) {
        flushList()
        elements.push(
          <h3 key={`h3-${index}`} className="font-serif text-xl md:text-2xl font-semibold text-interface-grey mt-8 mb-4">
            {trimmedLine.slice(4)}
          </h3>
        )
        return
      }

      // Numbered list
      if (/^\d+\./.test(trimmedLine)) {
        flushList()
        const match = trimmedLine.match(/^\d+\.\s*\*\*(.+?)\*\*:?\s*(.*)$/)
        if (match) {
          elements.push(
            <div key={`numbered-${index}`} className="flex gap-3 mb-4">
              <span className="font-mono text-sm text-electric-violet font-semibold mt-1">{trimmedLine.match(/^\d+/)?.[0]}.</span>
              <p className="text-interface-grey/80 leading-relaxed">
                <strong className="text-interface-grey">{match[1]}</strong>
                {match[2] && `: ${match[2]}`}
              </p>
            </div>
          )
        } else {
          elements.push(
            <div key={`numbered-${index}`} className="flex gap-3 mb-4">
              <span className="font-mono text-sm text-electric-violet font-semibold mt-1">{trimmedLine.match(/^\d+/)?.[0]}.</span>
              <p className="text-interface-grey/80 leading-relaxed">{trimmedLine.replace(/^\d+\.\s*/, '')}</p>
            </div>
          )
        }
        return
      }

      // Bullet list
      if (trimmedLine.startsWith('- ') || trimmedLine.startsWith('* ')) {
        const content = trimmedLine.slice(2)
        // Handle bold items
        const boldMatch = content.match(/^\*\*(.+?)\*\*:?\s*(.*)$/)
        if (boldMatch) {
          currentList.push(`**${boldMatch[1]}**: ${boldMatch[2]}`)
        } else {
          currentList.push(content)
        }
        return
      }

      // Regular paragraph
      flushList()
      // Handle inline bold
      const formattedLine = trimmedLine.replace(/\*\*(.+?)\*\*/g, '<strong class="text-interface-grey font-semibold">$1</strong>')
      elements.push(
        <p 
          key={`p-${index}`} 
          className="text-interface-grey/80 leading-relaxed mb-6 text-lg"
          dangerouslySetInnerHTML={{ __html: formattedLine }}
        />
      )
    })

    flushList()
    flushBlockquote()

    return elements
  }

  return (
    <section className="py-12 bg-midnight-navy">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Article content */}
          <article className="prose-custom">
            {renderContent(post.content)}
          </article>
        </div>
      </div>
    </section>
  )
}
