def asset_path(path)
  identifier = Nanoc::Identifier.new(path)
  return identifier.to_s if ENV['NANOC_ENV'] != 'ci'
  # Use the SCSS (pre-compiled) contents to compute md5sum
  if identifier.ext == 'css'
    scss = Nanoc::Identifier.new(identifier.without_ext + '.scss')
    fp = 'content' + scss
    hash = Digest::MD5.file(fp).hexdigest
  else
    fp = 'content' + identifier
    hash = Digest::MD5.file(fp).hexdigest
  end
  identifier.without_ext + '-' + hash + '.' + identifier.ext
end
