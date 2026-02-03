# Jekyll plugin to convert .md links to .html links in markdown content
# This hook runs before markdown conversion to fix internal links
Jekyll::Hooks.register [:pages, :documents], :pre_render do |page, payload|
  # Only process markdown files
  if page.content.respond_to?(:gsub!)
    # Convert relative .md links to .html links in markdown link syntax
    # Matches markdown links like [text](path/to/file.md) or [text](../file.md)
    # Only converts relative links, not absolute URLs
    page.content.gsub!(/\[([^\]]+)\]\(([^)]+\.md)(#[^)]*)?\)/) do |match|
      text = $1
      md_path = $2
      anchor = $3 || ''
      
      # Only convert if it's a relative path (not starting with http:// or https://)
      if md_path !~ /^https?:\/\//
        html_path = md_path.sub(/\.md$/, '.html')
        "[#{text}](#{html_path}#{anchor})"
      else
        match
      end
    end
  end
end

