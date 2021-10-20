#!/usr/bin/ruby

arguments = ARGV

def getnum(file_name)
  /morph-(\d+).png/.match(file_name)[1].to_i
end

def increase_num(file_name)
  num = getnum(file_name)
  File.rename(file_name, "morph-#{num + 1}_temp.png")
end

def clean(file_name)
  if file_name =~ /temp/
    new = /(morph-\d+)_temp.png/.match(file_name)[1]
    File.rename(file_name, "#{new}.png")
  end
end

target_num = ARGV[0].to_i

files = Dir.entries('.').select do |f| 
  File.file? f and f =~ /morph-\d+.png/ and getnum(f) >= target_num
end.sort { |a, b| getnum(a) <=> getnum(b) }.each { |f| increase_num f }

files = Dir.entries('.').select do |f|
  File.file? f and f.include? "morph"
end.each { |f| clean f }

puts target_num

print files


