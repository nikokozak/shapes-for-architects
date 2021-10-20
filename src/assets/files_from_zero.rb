#!/usr/bin/ruby

def getnum(file_name)
  /morph-(\d+).+/.match(file_name)[1].to_i
end

def decrease_num(file_name, offset)
  num = getnum(file_name)
  File.rename(file_name, "morph-#{num - offset}_temp.png")
end

def clean(file_name)
  if file_name.include? "temp"
    new = /(morph-\d+)_temp.png/.match(file_name)[1]
    File.rename(file_name, "#{new}.png")
  end
end

files = Dir.entries('.').select do |f| 
  File.file? f and f.include? "morph"
end.sort { |a, b| getnum(a) <=> getnum(b) }

smallest_num = getnum(files[0])

files.each { |f| decrease_num(f, smallest_num) }

files = Dir.entries('.').select do |f| 
  File.file? f and f.include? "morph"
end
files.each { |f| clean f }
