// const mjml = require('mjml')
// const fs = require('fs')

// const input = fs.readFileSync('./src/index.mjml', 'utf8')
// const output = mjml(input, { minify: true })

// fs.writeFileSync('./dist/email.html', output.html)

const mjml = require('mjml')
const fs = require('fs')
const path = require('path')

const inputPath = './src/index.mjml'
const outputPath = './dist/email-dev.html'

function build() {
  const input = fs.readFileSync(inputPath, 'utf8')
  const output = mjml(input, { minify: false })
  fs.writeFileSync(outputPath, output.html)
  console.log(`[${new Date().toLocaleTimeString()}] Compiled ${inputPath} → ${outputPath}`)
}

// Initial build
build()

// Watch files in src/ recursively
fs.watch('./src', { recursive: true }, (eventType, filename) => {
  if (filename.endsWith('.mjml')) {
    console.log(`[${new Date().toLocaleTimeString()}] Detected change in: ${filename}`)
    build()
  }
})
