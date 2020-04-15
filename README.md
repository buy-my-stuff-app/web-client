# Buy My Stuff App - Web Client

## Use with Docker
### Development
1. Build development image: `docker build -t raulcontrerasrubio/buymystuffapp-dev-web-client -f Dockerfile.dev .`
2. Run development image: `docker run -it -p 3000:3000 -v $(pwd):/home/bmsa/web-client raulcontrerasrubio/buymystuffapp-dev-web-client`
3. Visit `http://localhost:3000`

### Production
1. Build production image: `docker build -t raulcontrerasrubio/buymystuffapp-prod-web-client .`
2. Run production image: `docker run -p 3000:3000 raulcontrerasrubio/buymystuffapp-prod-web-client`
3. Visit: `http://localhost:3000`

### Development with docker-compose
1. Run `docker-compose up --build`
2. Visit: `http://localhost:3000`

### Development with HTTPS
Element required to use geolocation, for example.
1. Build development image: `docker build -t raulcontrerasrubio/buymystuffapp-dev-web-client -f Dockerfile.dev .`
2. Run with HTTPS: `docker run -it -e HTTPS=true -p 3000:3000 -v $(pwd):/home/bmsa/web-client raulcontrerasrubio/buymystuffapp-dev-web-client`