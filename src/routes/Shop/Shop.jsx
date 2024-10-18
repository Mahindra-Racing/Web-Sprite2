// Shop.jsx
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DollarSign, ShoppingCart } from 'lucide-react';
import './Shop.css';

// Dados de exemplo dos produtos gerais
const products = [
  {
    id: 1,
    name: 'Formula E New Era Repreve 9FORTY Cap',
    price: 380,
    image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd843c058/images/large/701229416001_pp_01_formulanewera.jpg?sw=818&q=80',
  },
  {
    id: 2,
    name: 'Formula E New Era Repreve Trucker Cap',
    price: 410,
    image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw63da690f/images/large/701229415001_pp_01_formulaenewera.jpg?sw=800&sh=800&sm=fit',
  },
  {
    id: 3,
    name: 'Formula E New Era Hankook Podium 9FORTY Cap',
    price: 420,
    image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw6bb33180/images/large/701230435001_pp_01_hankookformulae.jpg?sw=1600&sh=1600&sm=fit',
  },
  {
    id: 4,
    name: 'Formula E New Era Repreve 9FIFTY Cap',
    price: 370,
    image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw89083b0f/images/large/701229414001_pp_01_formulaenewera.jpg?sw=1600&sh=1600&sm=fit',
  },
  {
    id: 5,
    name: 'Formula E Wordmark Trucker Cap',
    price: 280,
    image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dwa0928e98/images/large/701223605002_pp_01_FormulaES9.jpg?sw=800&sh=800&sm=fit',
  },
  {
    id: 6,
    name: 'Formula E Camo Cap',
    price: 280,
    image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw9d8935fd/images/large/701223397001_pp_03_FormulaES9.jpg?sw=1600&sh=1600&sm=fit',
  },
  {
    id: 7,
    name: 'Formula E Change Accelerated Hoodie',
    price: 790,
    image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw0c1c6a2a/images/large/701223395001_pp_01_FormulaES9.jpg?sw=1600&sh=1600&sm=fit',
  },
  {
    id: 8,
    name: 'Formula E Packable Backpack',
    price: 380,
    image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw08b14011/images/large/701223600001_pp_01_FormulaES9.jpg?sw=1600&sh=1600&sm=fit',
  },
  {
    id: 9,
    name: 'Formula E Tonal Hoodie',
    price: 750,
    image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dwa81500a3/images/large/701223399001_pp_01_FormulaES9.jpg?sw=1600&sh=1600&sm=fit',
  },
  {
    id: 10,
    name: 'Formula E Gradient Water Bottle',
    price: 200,
    image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dwcbe076c5/images/large/701223602001_pp_01_FormulaES9.jpg?sw=1600&sh=1600&sm=fit',
  },
];

// Dados de exemplo dos produtos dos times
const teamProducts = {
  jaguar: [
    { id: 1, name: 'Jaguar TCS Racing 2024 Team Cap', price: 410, image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dwbbeb7567/images/large/701231100001_pp_01_jaguarformulae.jpg?sw=1600&sh=1600&sm=fit' },
    { id: 2, name: 'Jaguar TCS Racing 2024 Team T-shirt', price: 570, image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dwee9970e7/images/large/701231099001_pp_01_jaguarformulae.jpg?sw=1600&sh=1600&sm=fit' },
    { id: 3, name: 'Jaguar TCS Racing 2024 Team Polo', price: 700, image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw4038a518/images/large/701231098001_pp_01_jaguarformulae.jpg?sw=1600&sh=1600&sm=fit' },
    { id: 4, name: 'Jaguar TCS Racing Season 10 Championship T-shirt', price: 500, image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw57b3a990/images/large/701228967001_pp_01_FormulaE.jpg?sw=1600&sh=1600&sm=fit' },
    { id: 5, name: 'Jaguar TCS Racing 22/23 Team 1/4 Zip Sweater', price: 1200, image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw2e5e5192/images/large/701223223001_pp_01_jaguar-racing.jpg?sw=1600&sh=1600&sm=fit' },
  ],
  penske: [
    { id: 6, name: 'DS Penske Season 10 Championship Cap', price: 320, image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dwe30ceb56/images/large/701228970001_pp_03_FormulaE.jpg?sw=1600&sh=1600&sm=fit' },
    { id: 7, name: 'DS Penske Season 10 Championship T-shirt', price: 470, image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dwe3f00f57/images/large/701228969001_pp_01_FormulaE.jpg?sw=1600&sh=1600&sm=fit' },
  ],
  porsche: [
    { id: 8, name: 'Porsche Motorsport 2023 Formula E Team Gilet', price: 1600, image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw4e242872/images/large/701225736001_pp_01_porsche-motorsport.jpg?sw=1600&sh=1600&sm=fit' },
    { id: 9, name: 'Porsche Motorsport 2023 Formula E Team Rain Jacket', price: 1850, image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw7fa9cd8b/images/large/701225737001_pp_01_porsche-motorsport.jpg?sw=1600&sh=1600&sm=fit' },
    { id: 10, name: 'Porsche Motorsport 2023 Formula E Team Softshell Jacket', price: 2310, image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw3e01e5a1/images/large/701225735001_pp_01_porsche-motorsport.jpg?sw=1600&sh=1600&sm=fit' },
    { id: 11, name: 'Porsche Motorsport 2023 Formula E Team Polo', price: 730, image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw400fb56e/images/large/701225739001_pp_01_porsche-motorsport.jpg?sw=1600&sh=1600&sm=fit' },
    { id: 12, name: 'Porsche Motorsport 2023 Formula E Team Knitted Sweater', price: 1500, image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw3cd8e360/images/large/701225734001_pp_01_porsche-motorsport.jpg?sw=1600&sh=1600&sm=fit' },
  ],
  nissan: [
    { id: 13, name: 'Nissan Formula E 2024 Team Cap', price: 325, image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw1729e8b0/images/large/701230687001_pp_01_nissanformulae.jpg?sw=1600&sh=1600&sm=fit' },
    { id: 14, name: 'Nissan Formula E Team Season 10 Championship Cap', price: 325, image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dwa1092d78/images/large/701228985001_pp_03_FormulaE.jpg?sw=1600&sh=1600&sm=fit' },
    { id: 15, name: 'Nissan Formula E 2024 Team T-shirt', price: 510, image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dwfde2351d/images/large/701230688001_pp_01_nissanformulae.jpg?sw=1600&sh=1600&sm=fit' },
    { id: 16, name: 'Nissan Formula E Team Season 10 Championship T-shirt', price: 465, image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw119ed196/images/large/701228984001_pp_01_FormulaE.jpg?sw=1600&sh=1600&sm=fit' },
    { id: 17, name: 'Nissan Formula E 2023 Team Polo', price: 605, image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dwe82fe90f/images/large/701226941001_pp_01_nissan.jpg?sw=1600&sh=1600&sm=fit' },
    { id: 18, name: 'Nissan Formula E 2023 Team T-shirt', price: 510, image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw20592cdf/images/large/701226942001_pp_01_nissan.jpg?sw=1600&sh=1600&sm=fit' },
    { id: 19, name: 'Nissan e.dams 22/23 Team T-shirt', price: 520, image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dwb01c94d4/images/large/701223975001_pp_01_nissan-e.dams.jpg?sw=1600&sh=1600&sm=fit' },
    { id: 20, name: 'Nissan Formula E Team Water Bottle', price: 280, image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dwe7c2f89d/images/large/701226504001_pp_01_nissan.jpg?sw=1600&sh=1600&sm=fit' },
    { id: 21, name: 'Nissan Formula E Team Keyring', price: 95, image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw418abef7/images/large/701226505001_pp_01_nissan.jpg?sw=1600&sh=1600&sm=fit' },
  ],
  andretti: [
    { id: 22, name: 'Andretti 2024 Team Cap', price: 260, image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw6e551f62/images/large/701232648001_pp_01_andrettiformulae.jpg?sw=1600&sh=1600&sm=fit' },
    { id: 23, name: 'Andretti 2024 Team T-shirt', price: 420, image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw46897160/images/large/701232647001_pp_01_andrettiformulae.jpg?sw=1600&sh=1600&sm=fit' },
    { id: 24, name: 'Andretti Season 10 Championship T-shirt', price: 465, image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dwbacc6298/images/large/701228971001_pp_01_FormulaE.jpg?sw=1600&sh=1600&sm=fit' },
  ],
  envision: [
    { id: 25, name: 'Envision Racing 2023 Team Polo', price: 560, image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf917a3ce/images/large/701228099001_pp_01_envisionracing.jpg?sw=1600&sh=1600&sm=fit' },
    { id: 26, name: 'Envision Racing 2023 Team T-shirt', price: 510, image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw3b3b050d/images/large/701228098001_pp_01_envisionracing.jpg?sw=1600&sh=1600&sm=fit' },
    { id: 27, name: 'Envision Racing 2023 Team Cap', price: 325, image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw54989e9a/images/large/701228100001_pp_01_envisionracing.jpg?sw=1600&sh=1600&sm=fit' },
    { id: 28, name: 'Envision Racing Season 10 Championship Cap', price: 325, image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dwb62fed0a/images/large/701228977001_pp_03_FormulaE.jpg?sw=1600&sh=1600&sm=fit' },
    { id: 29, name: 'Envision Racing Season 10 Championship T-shirt', price: 465, image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw895c7cde/images/large/701228976001_pp_01_FormulaE.jpg?sw=1600&sh=1600&sm=fit' },
    { id: 30, name: 'Envision Racing Women`s 2022 Team Polo', price: 510, image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw6d3e61b3/images/large/701223234001_pp_01_envision.jpg?sw=1600&sh=1600&sm=fit' },
    { id: 31, name: 'Envision Racing 2022 Team Cap', price: 280, image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw6fb6390b/images/large/701223238001_pp_03_envision-racing-fe-team.jpg?sw=1600&sh=1600&sm=fit' },
    { id: 32, name: 'Envision Racing 2022 Team Hoodie', price: 790, image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dwfb15d833/images/large/701223235001_pp_01_envision-racing-fe-team.jpg?sw=1600&sh=1600&sm=fit' },
    { id: 33, name: 'Envision Racing 2022 Team Polo', price: 510, image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dwac167863/images/large/701223233001_pp_01_envision-racing-fe-team.jpg?sw=1600&sh=1600&sm=fit' },
    { id: 34, name: 'Envision Racing 2022 Team Technical Jacket', price: 1115, image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw7d48fad7/images/large/701223237001_pp_01_envision-racing-fe-team.jpg?sw=1600&sh=1600&sm=fit' },
  ],
  mahindra: [
    { id: 35, name: 'Mahindra Racing 2024 Team T-shirt', price: 500, image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd248c2c7/images/large/701231061001_pp_01_mahindraformulae.jpg?sw=1600&sh=1600&sm=fit' },
    { id: 36, name: 'Mahindra Racing Season 10 Championship Cap', price: 325, image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dwc27c09df/images/large/701229003001_pp_03_FormulaE.jpg?sw=1600&sh=1600&sm=fit' },
    { id: 37, name: 'Mahindra Racing Season 10 Championship T-shirt', price: 465, image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw90f9fc8d/images/large/701229002001_pp_01_FormulaE.jpg?sw=1600&sh=1600&sm=fit' },
    { id: 38, name: 'Mahindra Racing 22/23 Team Softshell Jacket', price: 1330, image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dwa069bcd0/images/large/701223269001_pp_01_mahindra-racing.jpg?sw=1600&sh=1600&sm=fit' },
    { id: 39, name: 'Mahindra Racing 22/23 Team Polo', price: 550, image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw20eb72ee/images/large/701223266001_pp_01_mahindra-racing.jpg?sw=1600&sh=1600&sm=fit' },
  ],
  mclaren: [
    { id: 40, name: 'NEOM McLaren Formula E 2024 Team 9FORTY Cap', price: 420, image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw6970b117/images/large/701230436001_pp_01_mclarenformulae.jpg?sw=1600&sh=1600&sm=fit' },
    { id: 41, name: 'NEOM McLaren Formula E Team 9FORTY Cap', price: 400, image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dwe485e1ac/images/large/701228258001_pp_01_mclarenformulae.jpg?sw=1600&sh=1600&sm=fit' },
    { id: 42, name: 'NEOM McLaren Formula E 2024 Team Polo', price: 745, image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dwdf3be05f/images/large/701231408001_pp_01_mclarenneomformulae.jpg?sw=1600&sh=1600&sm=fit' },
    { id: 43, name: 'NEOM McLaren Formula E Team 1/4 Zip', price: 885, image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw97a2e024/images/large/701227003001_pp_01_mclarenfe23.jpg?sw=1600&sh=1600&sm=fit' },
    { id: 44, name: 'NEOM McLaren Formula E Team T-shirt', price: 510, image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dwe5d5f9e9/images/large/701227007001_pp_01_mclarenfe23.jpg?sw=1600&sh=1600&sm=fit' },
    { id: 45, name: 'NEOM McLaren Formula E Team Gilet', price: 1115, image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dwae39a3e6/images/large/701227001001_pp_01_mclarenfe23.jpg?sw=1600&sh=1600&sm=fit' },
    { id: 46, name: 'NEOM McLaren Formula E Team Jacket', price: 1300, image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw064ba651/images/large/701226999001_pp_01_mclarenfe23.jpg?sw=1600&sh=1600&sm=fit' },
  ],
  maserati: [
    { id: 47, name: 'Maserati Formula E Team 2024 Team Cap', price: 390, image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw41c35167/images/large/701232462001_pp_01_maseratiformulae.jpg?sw=800&sh=800&sm=fit' },
    { id: 48, name: 'Maserati Formula E Team 2024 Team T-shirt', price: 500, image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw4a0d5778/images/large/701232461001_pp_01_maseratiformulae.jpg?sw=1600&sh=1600&sm=fit' },
    { id: 49, name: 'Maserati MSG Racing Season 10 Championship T-shirt', price: 465, image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf52aede0/images/large/701228965001_pp_01_FormulaE.jpg?sw=1600&sh=1600&sm=fit' },
    { id: 50, name: 'Maserati MSG Racing Season 10 Championship Cap', price: 325, image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw53a6bf35/images/large/701228966001_pp_03_FormulaE.jpg?sw=1600&sh=1600&sm=fit' },
  ],
  abt: [
    { id: 51, name: 'ABT Cupra Formula E 2024 Team T-shirt', price: 500, image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw27063a6c/images/large/701232463001_pp_01_abtformulae.jpg?sw=1600&sh=1600&sm=fit' },
    { id: 52, name: 'ABT Cupra Formula E Season 10 Championship T-shirt', price: 465, image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw657183e0/images/large/701228973001_pp_01_FormulaE.jpg?sw=1600&sh=1600&sm=fit' },
    { id: 53, name: 'ABT Cupra Formula E Season 10 Championship Cap', price: 325, image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dwcf4a9684/images/large/701228974001_pp_03_FormulaE.jpg?sw=1600&sh=1600&sm=fit' },
  ],
  ert: [
    { id: 54, name: 'NIO 333 22/23 Team 1/4 Zip Sweater', price: 700, image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dwfa78e2bf/images/large/701223288001_pp_01_nio-333-racing.jpg?sw=1600&sh=1600&sm=fit' },
    { id: 55, name: 'NIO 333 22/23 Team Polo', price: 510, image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw475a050f/images/large/701223287001_pp_01_nio-333-racing.jpg?sw=1600&sh=1600&sm=fit' },
  ],
};

const teamLogos = {
  jaguar: 'https://upload.wikimedia.org/wikipedia/pt/9/97/Logo_da_Jaguar_Racing.png',
  penske: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/LogoDS_PENSKE.webp',
  porsche: 'https://assets.motorsportstats.com/team/logo/FormulaE_Team_TAGHeuerPorscheFormulaETeam.png',
  nissan: 'https://upload.wikimedia.org/wikipedia/pt/a/a9/Logotipo_da_Nissan_Formula_E_Team.png',
  andretti: 'https://andrettiglobal.com/wp-content/uploads/2023/11/AG_FE_PrimaryLogo_Blk.png',
  envision: 'https://seeklogo.com/images/E/envision-racing-formula-e-logo-5D59B99E28-seeklogo.com.png',
  mahindra: 'https://store.fiaformulae.com/on/demandware.static/-/Sites-navigation-catalog-FE-S9/default/dw8427c471/LogosTeams/LogoMahindra2.png',
  mclaren: 'https://queen-of-motorsport.com/img/logos/NEOMMclaren.png',
  maserati: 'https://store.fiaformulae.com/on/demandware.static/-/Sites-navigation-catalog-FE-S9/default/dw7b9208e4/LogosTeams/LogoMaserati23.png',
  abt: 'https://upload.wikimedia.org/wikipedia/pt/a/a1/Logotipo_da_ABT_CUPRA_Formula_E_Team.png',
  ert: 'https://upload.wikimedia.org/wikipedia/en/1/14/ERT_Formula_E_logo.png',
};

const Shop = () => {
  const generalProductsRef = useRef(null);
  const teamProductsRef = useRef(null);
  const [selectedTeam, setSelectedTeam] = useState(null);

  const scrollLeft = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({
        left: Math.max(-300, -ref.current.scrollLeft),
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = (ref) => {
    if (ref.current) {
      const maxScroll = ref.current.scrollWidth - ref.current.clientWidth;
      ref.current.scrollBy({
        left: Math.min(300, maxScroll - ref.current.scrollLeft),
        behavior: 'smooth',
      });
    }
  };

  const handleTeamSelect = (team) => {
    setSelectedTeam(team);
  };

  const navigate = useNavigate(); // Cria a instância do useNavigate

  const handleMarketplaceClick = () => {
    navigate('/marketplace'); // Redireciona para a rota do marketplace
  };

  return (
    <main className="mainSHOP">
      <section>
        <div className="shop-containerSHOP">
          <div className="headerSHOP">
            <h1 className="shop-titleSHOP">
              the brand new formula e fanwear range
            </h1>
            <button className="buy-now-buttonSHOP">Shop Now</button>
          </div>
  
          <h2 className="shop-subtitleSHOP">
            Explore our exclusive Formula E products. Show your support by shopping for the latest clothing and accessories!
          </h2>
  
          <h2 className="product-section-titleSHOP">Official Formula E Products</h2>
  
          <div className="carousel-wrapperSHOP">
            <button className="carousel-buttonSHOP left" onClick={() => scrollLeft(generalProductsRef)}>
              ◀
            </button>
            <div className="carousel-containerSHOP" ref={generalProductsRef}>
              <div className="products-containerSHOP">
                {products.map((product) => (
                  <div key={product.id} className="product-cardSHOP">
                    <img src={product.image} alt={product.name} className="product-imageSHOP" />
                    <h2 className="product-nameSHOP">{product.name}</h2>
                    <p className="product-priceSHOP">
                      <DollarSign size={15} style={{ verticalAlign: 'middle' }} />{product.price}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <button className="carousel-buttonSHOP right" onClick={() => scrollRight(generalProductsRef)}>
              ▶
            </button>
          </div>
  
          <h2 className="product-section-titleSHOP">Team Merchandise</h2>
          <p className="promo-textSHOP">
            Show your passion for Formula E with our exclusive fanwear collection!
          </p>
          <div className="team-buttons-containerSHOP">
            {Object.entries(teamLogos).map(([team, logo]) => (
              <button
                key={team}
                className={`team-buttonSHOP ${selectedTeam === team ? 'selectedSHOP' : ''}`}
                onClick={() => handleTeamSelect(team)}
              >
                <img src={logo} alt={`${team} logo`} className="team-logoSHOP" />
              </button>
            ))}
          </div>
  
          {selectedTeam && (
            <div className="carousel-wrapperSHOP">
              <button className="carousel-buttonSHOP left" onClick={() => scrollLeft(teamProductsRef)}>
                ◀
              </button>
              <div className="carousel-containerSHOP" ref={teamProductsRef}>
                <div className="products-containerSHOP">
                  {teamProducts[selectedTeam].map((product) => (
                    <div key={product.id} className="product-cardSHOP">
                      <img src={product.image} alt={product.name} className="product-imageSHOP" />
                      <h2 className="product-nameSHOP">{product.name}</h2>
                      <p className="product-priceSHOP">
                        <DollarSign size={15} style={{ verticalAlign: 'middle' }} />{product.price}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <button className="carousel-buttonSHOP right" onClick={() => scrollRight(teamProductsRef)}>
                ▶
              </button>
            </div>
          )}
  
          <div className="promo-sectionSHOP">
            <div className="promo-contentSHOP">
              <h1 className="product-section-titleSHOP-market">Marketplace</h1>
              <p className="promo-textSHOP">
                Show your passion for Formula E with our exclusive fanwear collection. Limited-time offers, so don't miss out!
              </p>
              <button className="go-to-marketplace" onClick={handleMarketplaceClick}>
                <ShoppingCart size={20} style={{ marginRight: '8px', verticalAlign: 'middle' }} />Ir para o Marketplace
              </button>
            </div>
            <div className="promo-imageSHOP">
              <img src="https://media-d.global.abb/is/image/abbc/abb-porsche-gen3-4:9x16?wid=810&hei=1440" alt="Marketplace Image" /> 
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};  

export default Shop;