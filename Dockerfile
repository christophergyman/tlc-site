FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY site/the-leadership-circle.html /usr/share/nginx/html/index.html
COPY site/Logos/ /usr/share/nginx/html/Logos/
COPY site/Photos/ /usr/share/nginx/html/Photos/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
