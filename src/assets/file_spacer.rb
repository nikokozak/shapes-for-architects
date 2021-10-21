#!/usr/bin/ruby
# Pass a number and this script will create a "space" for a file with that number
# amongst all the numbered files matching MATCH. Note that the number capture
# group is important.
#
# eg: ruby file-space.rb 5 -> morph-3, morph-4, [morph-6, prev morph-5], [morph-7, prev morph-6]

MATCH = /morph-(\d+)/
target_num = ARGV[0].to_i

def getnum(file_name)
  MATCH.match(file_name)[1].to_i
end

def increase_num(file_name)
  num = getnum(file_name)
  File.rename(file_name, "morph-#{num + 1}_tmp.png")
end

def clean(file_name)
  if new = MATCH.match(file_name)
    File.rename(file_name, "#{new}.png")
  end
end

Dir.entries('.').select do |f| 
  File.file? f and MATCH.match(f) and getnum(f) >= target_num
end.each { |f| increase_num f }

Dir.entries('.').select { |f| File.file? f and Match.match f }.each { |f| clean f }


