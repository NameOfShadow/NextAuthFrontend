# Этап сборки
FROM node:20-alpine AS build

# Устанавливаем рабочую директорию
WORKDIR /nextauth_frontend

# Копируем package.json и yarn.lock
COPY package.json yarn.lock ./

# Устанавливаем зависимости
RUN yarn install

# Копируем весь проект в контейнер
COPY . .

# Собираем приложение
RUN yarn build

# Этап production
FROM nginx:stable-alpine AS production

# Устанавливаем рабочую директорию
WORKDIR /usr/share/nginx/html

# Удаляем стандартные файлы nginx
RUN rm -rf ./*

# Копируем собранное приложение из предыдущего этапа
COPY --from=build /nextauth_frontend/dist .

# Копируем файл конфигурации nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Открываем порт
EXPOSE 80

# Запуск nginx
CMD ["nginx", "-g", "daemon off;"]
