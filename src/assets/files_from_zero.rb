#!/usr/bin/ruby
# Re-orders files to start from 0. This fixed an error where all my images
# initially started numberin from 5.

MATCH = /morph-(\d+)/

def getnum(file_name)
  MATCH.match(file_name)[1].to_i
end

def decrease_num(file_name, offset = 0)
  num = getnum(file_name)
  File.rename(file_name, "morph-#{num - offset}_temp.png")
end

def clean(file_name)
  if new = MATCH.match(file_name)
    File.rename(file_name, "#{new}.png")
  end
end

sorted_files = Dir.entries('.').select do |f| 
  File.file? f and f.include? "morph"
end.sort { |a, b| getnum(a) <=> getnum(b) }

smallest_num = getnum(sorted_files[0])

sorted_files.each { |f| decrease_num(f, smallest_num) }

Dir.entries('.').select { |f| File.file? f and MATCH.match(f) }.each { |f| clean f }
