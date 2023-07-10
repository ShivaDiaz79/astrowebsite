import React from "react";
import ColorSeccion from "./ColorSeccion";


const AstroSecction = () => {
  return (
   
        <section>
           

          <marquee className=" bg-transparent  py-2 my-2 animate-marquee  whitespace-nowrap">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2644.7 161"
              aria-hidden="true"
              focusable="false"
            >
            <path d="M152.9 44c-1.9-1.3-4-2-6.3-2.4-1.7-.3-3.5-.5-5.2-.5H101c-.5 0-1 .1-1.5.1-2.5.1-5 .4-7.3 1.3-4.5 1.8-7.7 4.8-9.6 9.3-.6 1.5-1 3.1-1.2 4.7-.2 1.3-.3 2.6-.3 3.9v41c0 .5.1.9.1 1.4.2 2.7.5 5.4 1.7 7.9 2.2 4.7 5.8 7.8 10.8 9.3 1.4.4 2.8.6 4.3.8 1.8.2 3.7.2 5.6.2h36.8c1.8 0 3.5-.1 5.2-.3 2.7-.4 5.3-1.2 7.7-2.7 2.8-1.8 4.9-4.3 6.3-7.4.6-1.4 1-2.9 1.2-4.4.4-2.3.5-4.5.5-6.8v-38c-.3-2.4-.5-4.9-1.1-7.3-1.1-4.4-3.5-7.7-7.3-10.1zm-14.1 53.8c-1 2-2.5 3.2-4.6 3.8-1.2.3-2.3.5-3.6.6-3.2.2-5.9-2-6.5-5.1-.5-2.6.8-5.4 3.5-6.7 1.1-.5 2.2-.8 3.4-1.1 1.3-.3 2.5-.5 3.8-.8.9-.2 1.5-.8 1.7-1.7 0-.2.1-.4.1-.6V68.1c0-.2 0-.4-.1-.6-.1-.5-.5-.8-1-.8s-1.1.1-1.6.2c-2.5.5-5.1 1-7.6 1.5-2.6.5-5.2 1-7.8 1.6-1.5.3-3.1.6-4.6.9h-.2c-.9.3-1.3.7-1.3 1.6v26.4c0 1.4-.2 2.8-.7 4.1-.9 2.1-2.6 3.5-4.8 4.1-1.2.3-2.4.5-3.6.6-3.2.1-5.8-2-6.4-5.1-.5-2.7.8-5.6 3.8-6.9 1.2-.5 2.4-.8 3.7-1 1-.2 1.9-.4 2.9-.6 1.3-.3 1.9-1.1 2-2.4V61.6c0-.4 0-.8.1-1.2.2-1 .9-1.5 1.8-1.7s1.7-.4 2.6-.6c2.4-.5 4.9-1 7.3-1.5 2.5-.5 5.1-1 7.6-1.5 2.2-.5 4.5-.9 6.7-1.3.7-.1 1.5-.3 2.2-.4 1-.1 1.7.6 1.8 1.6v19.8c.2 6.3.2 12.6.2 19 0 1.4-.2 2.8-.8 4zm540.7-40.4c.8 0 1.3-.2 1.7-.6.4-.4.6-1 .6-1.6s-.1-1.3-.5-1.6c-.5-.4-1.1-.6-1.8-.6-.8 0-1.3.2-1.7.6-.4.4-.6 1-.6 1.6s.2 1.3.6 1.6c.5.4 1 .6 1.7.6zM431.3 0h-87.5c-20.3 0-36.8 16.5-36.9 36.8v87.4c0 20.3 16.5 36.8 36.8 36.8h87.5c20.3 0 36.8-16.5 36.8-36.7V36.8C468 16.5 451.5 0 431.3 0zm35.2 124.2c0 19.4-15.8 35.2-35.2 35.2h-87.5c-19.4 0-35.2-15.8-35.2-35.2V36.7c0-19.4 15.8-35.2 35.2-35.1h87.5c19.4 0 35.2 15.8 35.2 35.2v87.4z"></path>
              <path d="M152.9 44c-1.9-1.3-4-2-6.3-2.4-1.7-.3-3.5-.5-5.2-.5H101c-.5 0-1 .1-1.5.1-2.5.1-5 .4-7.3 1.3-4.5 1.8-7.7 4.8-9.6 9.3-.6 1.5-1 3.1-1.2 4.7-.2 1.3-.3 2.6-.3 3.9v41c0 .5.1.9.1 1.4.2 2.7.5 5.4 1.7 7.9 2.2 4.7 5.8 7.8 10.8 9.3 1.4.4 2.8.6 4.3.8 1.8.2 3.7.2 5.6.2h36.8c1.8 0 3.5-.1 5.2-.3 2.7-.4 5.3-1.2 7.7-2.7 2.8-1.8 4.9-4.3 6.3-7.4.6-1.4 1-2.9 1.2-4.4.4-2.3.5-4.5.5-6.8v-38c-.3-2.4-.5-4.9-1.1-7.3-1.1-4.4-3.5-7.7-7.3-10.1zm-14.1 53.8c-1 2-2.5 3.2-4.6 3.8-1.2.3-2.3.5-3.6.6-3.2.2-5.9-2-6.5-5.1-.5-2.6.8-5.4 3.5-6.7 1.1-.5 2.2-.8 3.4-1.1 1.3-.3 2.5-.5 3.8-.8.9-.2 1.5-.8 1.7-1.7 0-.2.1-.4.1-.6V68.1c0-.2 0-.4-.1-.6-.1-.5-.5-.8-1-.8s-1.1.1-1.6.2c-2.5.5-5.1 1-7.6 1.5-2.6.5-5.2 1-7.8 1.6-1.5.3-3.1.6-4.6.9h-.2c-.9.3-1.3.7-1.3 1.6v26.4c0 1.4-.2 2.8-.7 4.1-.9 2.1-2.6 3.5-4.8 4.1-1.2.3-2.4.5-3.6.6-3.2.1-5.8-2-6.4-5.1-.5-2.7.8-5.6 3.8-6.9 1.2-.5 2.4-.8 3.7-1 1-.2 1.9-.4 2.9-.6 1.3-.3 1.9-1.1 2-2.4V61.6c0-.4 0-.8.1-1.2.2-1 .9-1.5 1.8-1.7s1.7-.4 2.6-.6c2.4-.5 4.9-1 7.3-1.5 2.5-.5 5.1-1 7.6-1.5 2.2-.5 4.5-.9 6.7-1.3.7-.1 1.5-.3 2.2-.4 1-.1 1.7.6 1.8 1.6v19.8c.2 6.3.2 12.6.2 19 0 1.4-.2 2.8-.8 4zm540.7-40.4c.8 0 1.3-.2 1.7-.6.4-.4.6-1 .6-1.6s-.1-1.3-.5-1.6c-.5-.4-1.1-.6-1.8-.6-.8 0-1.3.2-1.7.6-.4.4-.6 1-.6 1.6s.2 1.3.6 1.6c.5.4 1 .6 1.7.6zM431.3 0h-87.5c-20.3 0-36.8 16.5-36.9 36.8v87.4c0 20.3 16.5 36.8 36.8 36.8h87.5c20.3 0 36.8-16.5 36.8-36.7V36.8C468 16.5 451.5 0 431.3 0zm35.2 124.2c0 19.4-15.8 35.2-35.2 35.2h-87.5c-19.4 0-35.2-15.8-35.2-35.2V36.7c0-19.4 15.8-35.2 35.2-35.1h87.5c19.4 0 35.2 15.8 35.2 35.2v87.4z"></path>
              <path d="M164.3 0H76.8C56.5 0 40 16.5 40 36.8v87.4c0 20.3 16.5 36.8 36.8 36.8h87.4c20.3 0 36.8-16.5 36.8-36.7V36.8C201 16.5 184.5 0 164.3 0zm35.1 124.3c0 19.4-15.8 35.2-35.2 35.2H76.7c-19.4 0-35.2-15.8-35.2-35.2V36.8c0-19.5 15.8-35.3 35.3-35.2h87.4c19.4 0 35.2 15.8 35.2 35.2v87.5zm494.6-44c1.5 0 3-.2 4.1-.7.3-.1.5-.2.6-.4.1-.1.1-.4.1-.7v-1.1c0-.5-.2-.7-.5-.7-.1 0-.3 0-.5.1-1.1.3-2.3.5-3.3.5-1.9 0-3.4-.5-4.3-1.6-.9-1.1-1.3-2.8-1.3-5v-.5c.1-2.3.5-4 1.4-5.1s2.3-1.6 4.4-1.6c1.1 0 2.1.1 3 .4.3.1.4.1.6.1.3 0 .5-.2.5-.7v-1.1c0-.3-.1-.6-.2-.7-.1-.1-.3-.3-.5-.4-1.3-.3-2.7-.6-3.9-.6-2.9 0-5 .8-6.7 2.6-1.6 1.7-2.4 4.2-2.4 7.4s.7 5.6 2.3 7.3c1.5 1.7 3.7 2.5 6.6 2.5zM388 40c-22.7 0-41 18.4-41 41s18.4 41 41 41 41-18.4 41-41-18.3-41-41-41zm18.9 59.2c-.7 1.2-2.3 1.6-3.5.8-9.6-5.9-21.7-7.2-36.1-4-1.4.4-2.8-.4-3.1-1.8-.4-1.4.4-2.8 1.8-3.1h.2c15.6-3.6 29-2.1 39.8 4.6 1.2.7 1.5 2.2.9 3.5zm5-11.2c-.9 1.5-2.9 2-4.4 1.1-11-6.8-27.8-8.7-40.9-4.8-1.7.6-3.5-.3-4.1-2s.3-3.5 2-4.1h.2c14.9-4.5 33.4-2.4 46.1 5.4 1.5.9 2 2.9 1.1 4.4zm5.5-13.1c-.9 1.9-3.3 2.5-5.1 1.4-13.2-7.8-35-8.6-47.7-4.8-2 .6-4.2-.5-4.8-2.5s.5-4.2 2.5-4.8c14.5-4.4 38.6-3.5 53.8 5.5 1.8 1.1 2.4 3.4 1.3 5.2zm263.2-14.1h-2.2c-.5 0-.7.2-.7.8v17.5c0 .5.2.7.7.7h2.2c.5 0 .7-.2.7-.7V61.5c0-.4-.2-.7-.7-.7zm1632 13.9l-8.4-4.7c-1.9-6.6-5.4-12.7-10.3-17.6-10.6-10.6-25.6-14-39.1-10.4l-26.6-15c-3.6-2-6.8-1.8-8.8.1-1.4 1.3-2.1 3.5-2.1 6.2v95.4c0 2.8.8 4.9 2.1 6.2 2 2 5.2 2.1 8.8.1l25.8-14.6c-14.5-4.2-25.5-16.1-28.5-30.8-3-15.1 2.8-30.5 15.1-39.8 4.5-3.5 9.6-5.8 15-7.2h.2c.2 0 .4-.1.6-.1.6-.1 1.3-.3 2-.4.3-.1.6-.1.9-.1.5-.1 1.1-.2 1.6-.2.4 0 .7-.1 1.1-.1.5 0 1-.1 1.6-.1h3.4c.9 0 1.8.1 2.7.2h.2c16.3 1.8 29.7 13.2 34.3 28.4 1.1 3.8 1.8 7.7 1.8 11.8 0 3.4-.4 6.8-1.3 10.1l8.1-4.6c5.9-3.8 5.9-9.3-.2-12.8zm-522.7-22H1743c-1.1 0-2 .8-2 1.9v11h-77.5c-1.1 0-2 .8-2 1.9v40c0 1 .9 1.9 2 1.9h79.4c1.1 0 2-.8 2-1.9v-11h44.9c1.1 0 2-.8 2-1.9v-40c0-1.1-.9-2-1.9-1.9zm-48.9 52.5c0 .2-.1.3-.3.3h-74.9c-.2 0-.3-.1-.3-.3V69.7c0-.2.1-.3.3-.3h75.2v35.8zm23.4-22.1c0 .3-.2.5-.5.5h-8.6c-.3 0-.5-.2-.5-.5v-2.5c0-.3.2-.5.5-.5h2.2c.2 0 .3-.1.3-.3V69.2c0-.2-.1-.3-.3-.3h-2c-.3 0-.5-.2-.5-.5V66c0-.3.2-.5.5-.5h8.1c.3 0 .5.2.5.5v2.5c0 .3-.2.5-.5.5h-2c-.2 0-.3.1-.3.3v10.5c0 .2.1.3.3.3h2.2c.3 0 .5.2.5.5h.1v2.5zm14.5-.1c0 .3-.2.5-.5.5h-3.1c-.4 0-.6-.2-.7-.4l-3.5-9.1c-.1-.2-.2-.1-.2.1V83c0 .3-.2.5-.5.5h-2.6c-.3 0-.5-.2-.5-.5V66c0-.3.2-.5.5-.5h3.1c.4 0 .6.2.7.5l3.6 9.8c.1.2.2.1.2-.1V66c0-.3.2-.5.5-.5h2.6c.2 0 .4.3.4.5v17z"></path>
              <path d="M1770.4.4h-87.5c-20.3 0-36.8 16.5-36.8 36.8v87.5c0 20.3 16.5 36.8 36.8 36.8h87.5c20.3 0 36.7-16.5 36.8-36.8V37.2c0-20.3-16.5-36.8-36.8-36.8zm35.2 124.3c0 19.4-15.8 35.2-35.2 35.2h-87.5c-19.4 0-35.2-15.8-35.2-35.2V37.2c0-19.4 15.8-35.2 35.2-35.2h87.5c19.4 0 35.2 15.8 35.2 35.2v87.5z"></path>
              <path d="M1675.6 82h3.3c.2 0 .3.1.3.3V96c0 .3.2.5.5.5h2.6c.3 0 .5-.2.5-.5V82.3c0-.2.1-.3.3-.3h3.3c.3 0 .5-.2.5-.5v-2.6c0-.2-.2-.5-.6-.5h-10.7c-.3 0-.5.2-.5.5v2.6c0 .3.2.5.5.5zm343-39.5c-10.3-.1-19.4 5.4-24.7 13.4-5.2-8.1-14.3-13.5-24.7-13.5-16.2 0-29.4 13.2-29.4 29.6 0 9.2 5 18.2 11.5 23.6.3.3 16.7 15.6 31.2 29v-21.7c0-14.8 22.5-14.7 22.5 0v21.9l29.6-28c7.3-5.9 13.4-14.4 13.4-24.7 0-16.3-13.2-29.6-29.4-29.6zm-50.9 52.8c-.4.5-1 .7-1.5.7-.7 0-1.2-.2-1.6-.5-8.8-7.8-13.2-16-13.2-24.3v-.1c0-7.1 4.3-15.2 10.1-18.8 1-.6 2.2-.3 2.8.6.6 1 .3 2.2-.6 2.8-4.6 2.9-8.1 9.6-8.1 15.4v.1c0 7.1 4 14.2 11.9 21.2.8.8.9 2 .2 2.9zm12.9-7.6c-.4.7-1.1 1-1.8 1-.3 0-.6-.1-1-.2-6-3.4-10-9.9-10-16.4V72c0-6.1 3.4-11.7 8.8-14.6 1-.5 2.2-.1 2.8.9.5 1 .1 2.2-.9 2.8-4.1 2.2-6.6 6.4-6.6 11 0 5 3.2 10.2 7.9 12.8 1 .6 1.3 1.8.8 2.8zm13.4-5.2c-4.9 0-8.8-4-8.8-8.9s4-8.9 8.8-8.9c4.9 0 8.8 4 8.8 8.9s-4 8.9-8.8 8.9zm16 6c-.3.2-.7.3-1 .3-.7-.1-1.4-.4-1.8-1.1-.5-1-.2-2.2.8-2.8 4.7-2.7 7.9-7.8 7.9-12.8 0-4.6-2.6-8.8-6.6-11-1-.5-1.4-1.8-.9-2.8s1.8-1.4 2.8-.9c5.4 2.9 8.8 8.5 8.8 14.6v.1c0 6.5-4 13-10 16.4zm26.7-17.3c0 8.3-4.5 16.4-13.2 24.3-.4.3-.9.5-1.4.5-.8 0-1.3-.3-1.7-.7-.7-.8-.7-2.1.2-2.9 7.9-7 11.9-14.1 11.9-21.2v-.1c0-5.7-3.6-12.5-8.1-15.4-1-.6-1.2-1.9-.6-2.8.6-1 1.9-1.2 2.8-.6 5.7 3.6 10.1 11.7 10.1 18.9zm-341 25.5c3.6 0 6.2-2.6 6.2-5.7V78.9c-.1-.2-.4-.5-.6-.5h-2.6c-.3 0-.5.2-.5.5V91c0 1.1-.9 2.1-2.5 2.1-1.5 0-2.5-.9-2.5-2.1V78.9c0-.3-.2-.5-.5-.5h-2.6c-.3 0-.5.2-.5.5V91c0 3.1 2.6 5.7 6.1 5.7zm9.5-.3h2.6c.3 0 .5-.2.5-.5V87c0-.2.2-.2.2-.1l3.5 9.1c.1.2.3.4.7.4h3.1c.3 0 .5-.2.5-.5v-17c.2-.2-.1-.5-.4-.5h-2.6c-.3 0-.5.2-.5.5v9.7c0 .2-.2.2-.2.1l-3.6-9.8c-.1-.2-.3-.5-.7-.5h-3.1c-.3 0-.5.2-.5.5v17c0 .3.2.5.5.5zm823.4-38.9c-12.4 0-22.5 10.1-22.5 22.5s10.1 22.5 22.5 22.5 22.5-10.1 22.5-22.5-10-22.5-22.5-22.5zm-8.6 34.9V69l20.8 11.7-20.8 11.7z"></path>
              <path d="M2528.1 32.5c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.4-48-48-48zm.5 72c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5 24.5 11 24.5 24.5-10.9 24.5-24.5 24.5zM2037.6 0h-87.5c-20.3 0-36.8 16.5-36.8 36.8v87.5c0 20.3 16.5 36.8 36.8 36.8h87.5c20.3 0 36.8-16.5 36.8-36.8V36.8c-.1-20.3-16.5-36.8-36.8-36.8zm35.2 124.2c0 19.4-15.8 35.2-35.2 35.2h-87.5c-19.4 0-35.2-15.8-35.2-35.2V36.8c0-19.4 15.8-35.2 35.2-35.2h87.5c19.4 0 35.2 15.8 35.2 35.2v87.4z"></path>
              <path d="M2571.3.4h-87.5c-20.3 0-36.8 16.5-36.8 36.8v87.5c0 20.3 16.5 36.8 36.8 36.8h87.5c20.4 0 36.8-16.5 36.8-36.7V37.2c0-20.3-16.5-36.8-36.8-36.8zm35.3 124.3c0 19.4-15.8 35.2-35.2 35.2h-87.5c-19.4 0-35.2-15.8-35.2-35.2V37.2c0-19.4 15.8-35.2 35.2-35.2h87.5c19.4 0 35.2 15.8 35.2 35.2v87.5zm-886.8-28.4h9.6c.3 0 .5-.2.5-.5v-2.6c.1-.1-.2-.3-.5-.3h-6.2c-.2 0-.3-.1-.3-.3v-3.1c0-.2.1-.3.3-.3h5.9c.3 0 .5-.2.5-.5v-2.6c0-.3-.2-.5-.5-.5h-5.9c-.2 0-.3-.1-.3-.3v-3.1c0-.2.1-.3.3-.3h6.1c.3 0 .5-.2.5-.5v-2.6c0-.3-.2-.5-.5-.5h-9.5c-.3 0-.5.2-.5.5v17c0 .3.2.5.5.5zm546.1-39.2c-14 0-25.3 11.3-25.3 25.2s11.3 25.2 25.3 25.2 25.3-11.3 25.3-25.2-11.3-25.2-25.3-25.2zm8.8 18.3h-5.7v14.3c-.1 3.3-2.8 5.9-6.1 5.9s-5.9-2.7-5.9-5.9c0-3.3 2.6-5.9 5.9-5.9 1.1 0 2.1.3 3 .8V69.1h8.9l-.1 6.3z"></path>
              <path d="M2304.4.4h-87.5c-20.3 0-36.8 16.5-36.8 36.8v87.5c0 20.3 16.5 36.8 36.8 36.8h87.5c20.3 0 36.7-16.5 36.8-36.8V37.2c0-20.3-16.5-36.8-36.8-36.8zm35.2 124.3c0 19.4-15.8 35.2-35.2 35.2h-87.5c-19.4 0-35.2-15.8-35.2-35.2V37.2c0-19.4 15.8-35.2 35.2-35.2h87.5c19.4 0 35.2 15.8 35.2 35.2v87.5zM694.5 86.9c-3.3 0-7.2.8-10.2 2.9-.9.7-.7 1.5.2 1.4 3.2-.4 10.5-1.3 11.8.4 1.2 1.7-1.5 8.6-2.7 11.7-.4.9.4 1.2 1.3.6 5.4-4.7 6.8-14.3 5.7-15.8-.5-.6-3-1.3-6.1-1.2zM662 79.3c1.7.8 3.5 1.1 5.6 1.1 2.2 0 3.9-.5 5.2-1.6 1.4-1 2-2.4 2-4.2 0-1.3-.3-2.3-.9-3.1-.6-.7-1.7-1.5-3.1-2l-2.9-1.2c-1.2-.5-2-.9-2.3-1.3-.4-.4-.6-.9-.6-1.6 0-1.6 1.1-2.4 3.5-2.4 1.3 0 2.7.2 3.9.6.4.1.7.2.8.2.3 0 .5-.2.5-.6v-1.1c0-.3-.1-.5-.2-.7-.1-.2-.3-.3-.6-.4-1.6-.5-3.1-.8-4.7-.8-2 0-3.7.5-4.9 1.5-1.3.9-1.9 2.3-1.9 3.9 0 2.4 1.3 4.2 4 5.3l3.1 1.2c1.1.5 1.7.8 2.1 1.2.4.4.5.9.5 1.5 0 .8-.3 1.6-.9 2-.6.4-1.6.7-2.7.7-1.8 0-3.4-.2-5-.8-.4-.1-.7-.2-.9-.2-.3 0-.4.2-.4.6v1.1c0 .3.1.5.2.7.1.1.3.3.6.4z"></path>
              <path d="M698.3 0h-87.5c-20.3 0-36.8 16.5-36.9 36.8v87.4c0 20.3 16.5 36.8 36.8 36.8h87.5c20.3 0 36.8-16.5 36.8-36.7V36.8C735 16.5 718.5 0 698.3 0zm35.2 124.2c0 19.4-15.8 35.2-35.2 35.2h-87.5c-19.4 0-35.2-15.8-35.2-35.2V36.7c0-19.4 15.8-35.2 35.2-35.1h87.5c19.4 0 35.2 15.8 35.2 35.2v87.4z"></path>
              <path d="M690.6 93.9c-11.2 4.9-23.5 7.3-34.7 7.3-16.5 0-32.6-4.6-45.6-12.5-.2-.1-.4-.2-.6-.2-.7 0-1.1.9-.4 1.6 12 11.1 27.9 17.8 45.5 17.8 12.6 0 27.2-4 37.2-11.6 1.8-1.2.4-3.1-1.4-2.4zM610.5 80h2.2c.5 0 .7-.2.7-.7V65c1.8-1.1 3.5-1.7 5.4-1.7 1.1 0 1.8.4 2.2 1 .4.6.7 1.4.7 2.7v12.1c0 .5.2.7.7.7h2.2c.5 0 .7-.2.7-.7V65c1.9-1.2 3.6-1.7 5.4-1.7 1.1 0 1.8.4 2.2 1 .4.6.7 1.4.7 2.7v12.2c0 .5.2.7.7.7h2.2c.5 0 .7-.2.6-.7V66c0-1.8-.4-3.1-1.3-4.1s-2.1-1.5-3.9-1.5c-2.3 0-4.8.8-7.2 2.6-.9-1.8-2.4-2.6-4.7-2.6s-4.5.8-6.8 2.4l-.2-1.2c0-.3-.1-.4-.3-.5-.1-.1-.3-.1-.5-.1h-1.7c-.5 0-.7.2-.7.7v17.6c0 .5.2.7.7.7zm278.2-13.5c20-15.7 48.3-11.4 63.3 9.5l7.5-4.4c-8.1-12.4-22.1-20.6-38-20.6-15.8 0-29.8 8.1-38 20.6 1.5-1.7 3.3-3.7 5.2-5.1zM647.2 80.3c2.3 0 4.7-.8 7-2.5l.2 1.3c0 .3.1.4.3.5.1.1.3.1.6.1h1.6c.5 0 .7-.2.7-.7V61.6c0-.5-.2-.7-.7-.7h-2.2c-.6 0-.8.3-.8.7v14c-1.7 1.2-3.5 1.8-5.2 2-1.2 0-2-.4-2.5-1-.5-.7-.7-1.6-.7-3v-12c0-.5-.2-.7-.7-.7h-2.2c-.5 0-.7.2-.7.7v13c0 1.8.4 3.2 1.3 4.2s2.2 1.5 4 1.5z"></path>
              <path d="M873 72.4v8.2l48.5 30.4L970 80.7v-8.2l-48.5 30.2z"></path>
              <path d="M965.3 0h-87.5c-20.3 0-36.8 16.5-36.9 36.8v87.4c0 20.3 16.5 36.8 36.8 36.8h87.5c20.3 0 36.8-16.5 36.8-36.7V36.8C1002 16.5 985.5 0 965.3 0zm35.2 124.2c0 19.4-15.8 35.2-35.2 35.2h-87.5c-19.4 0-35.2-15.8-35.2-35.2V36.7c0-19.4 15.8-35.2 35.2-35.1h87.5c19.4 0 35.2 15.8 35.2 35.2v87.4zM1464 42.4h-38.7v81c12.1 0 19.3-.1 21.7-.1s3.6-1.3 3.7-3.9v-15.2c9.9 1.2 42.1-1.5 43.1-30.5.7-19.3-9.3-29.7-29.8-31.3z"></path>
              <path d="M907.2 86.2c2.6-1.9 5.5-2.9 8.6-2.8 5.3 0 10 2.7 13.1 7.2l6.8-4.2c-3-4.7-8.2-7.6-14.2-7.6-5.9 0-11.2 3-14.3 7.4zm592-86.2h-87.5c-20.3 0-36.8 16.5-36.8 36.8v87.4c0 20.3 16.5 36.8 36.8 36.8h87.5c20.3 0 36.8-16.5 36.8-36.7V36.8c0-20.3-16.5-36.8-36.8-36.8zm35.3 124.2c0 19.4-15.8 35.2-35.2 35.2h-87.5c-19.4 0-35.2-15.8-35.2-35.2V36.7c0-19.4 15.8-35.2 35.2-35.2v.1h87.5c19.4 0 35.2 15.8 35.2 35.2v87.4z"></path>
              <path d="M940.7 83.3l7.1-4.5c-5.6-8.3-15.3-14-26.2-14-11 0-20.6 5.5-26.1 14 .4-.5.7-.7 1.2-1 13.7-11.3 33.3-8.8 44 5.5zM1248 61.6h-27.2v15.9h27.2zm0-19.9h-27.2v15.9h27.2zm0 43.7h-27.2v15.9h27.2zm-93.1 19.9h-27.1v15.9h27.1zm31 0h-27.1v15.9h27.1zm31.1 0h-27.2v15.9h27.2zm31 0h-27.2v15.9h27.2zm-31-19.9h-27.2v15.9h27.2zm-31.1 0h-27.1v15.9h27.1zm0-23.8h-27.1v15.9h27.1z"></path>
              <path d="M1232.7-.2h-87.5c-20.3 0-36.8 16.5-36.8 36.8V124c0 20.3 16.5 36.8 36.8 36.8h87.5c20.3 0 36.8-16.5 36.8-36.7V36.6c0-20.3-16.5-36.8-36.8-36.8zM1268 124c0 19.4-15.8 35.2-35.2 35.2h-87.5c-19.4 0-35.2-15.8-35.2-35.2V36.5c0-19.4 15.8-35.2 35.2-35.2v.1h87.5c19.4 0 35.2 15.8 35.2 35.2V124z"></path>
            </svg>
          </marquee>
        
          </section>
  );
};

export default AstroSecction;
