require 'base64'
src, out, dir = ARGV
html = File.read(src, encoding: 'UTF-8')
html = html.gsub(%r{assets/([A-Za-z0-9_\-]+\.(webp|png))}) do
  f = File.join(dir, $1); mime = $2 == 'png' ? 'image/png' : 'image/webp'
  "data:#{mime};base64," + Base64.strict_encode64(File.binread(f))
end
File.write(out, html)
puts "#{out}: #{File.size(out)} bytes, remaining refs: #{html.scan('assets/').size}"
