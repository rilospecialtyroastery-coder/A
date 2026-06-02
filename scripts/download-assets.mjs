import { mkdir, writeFile } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const BASE = 'https://rstrcoffee.com';

const assets = [
  // Logo
  { url: 'https://rstrcoffee.com/cdn/shop/files/new_logo_-_CROPD.png?v=1775238337&width=400', dest: 'public/images/logo.png' },
  // Hero / Banner
  { url: 'https://rstrcoffee.com/cdn/shop/files/hrmns._and_RSTR._4cc045c8-675d-4618-a2da-9119303aa17d.png?v=1754867584&width=1440', dest: 'public/images/hero-banner.png' },
  { url: 'https://rstrcoffee.com/cdn/shop/files/Untitled_design_6.png?v=1775916309&width=630', dest: 'public/images/hero-secondary.png' },
  // In Stock Products
  { url: 'https://rstrcoffee.com/cdn/shop/files/larger_size_small_choco.png?v=1775226769&width=600', dest: 'public/images/drip-bag-set.png' },
  { url: 'https://rstrcoffee.com/cdn/shop/files/3_sample_box_3b207943-673b-4d45-ad66-9c262fbd81af.png?v=1755031240&width=600', dest: 'public/images/sample-box.png' },
  { url: 'https://rstrcoffee.com/cdn/shop/files/RICH_UNCLE_Width_9_x_height_13_cm.png?v=1777962219&width=600', dest: 'public/images/rich-uncle.png' },
  { url: 'https://rstrcoffee.com/cdn/shop/files/THE_DEALER_Width_9_x_height_13_cm_2.png?v=1777962172&width=600', dest: 'public/images/the-dealer.png' },
  { url: 'https://rstrcoffee.com/cdn/shop/files/THE_DEALER_Width_9_x_height_13_cm_1.png?v=1777962123&width=600', dest: 'public/images/main-character.png' },
  { url: 'https://rstrcoffee.com/cdn/shop/files/gift_card_2.png?v=1775731488&width=600', dest: 'public/images/gift-card.png' },
  { url: 'https://rstrcoffee.com/cdn/shop/files/Chapata_00001-2.jpg?v=1775809711&width=600', dest: 'public/images/chapata.jpg' },
  { url: 'https://rstrcoffee.com/cdn/shop/files/Sarnies_E-Com_TH_Product_Cover_Image_Honduras.jpg?v=1775730620&width=600', dest: 'public/images/honduras.jpg' },
  { url: 'https://rstrcoffee.com/cdn/shop/files/rn-image_picker_lib_temp_e29980d3-c8b8-4839-a7e4-ccc752e2e6f8.png?v=1775236799&width=600', dest: 'public/images/tiramisu-crisis.png' },
  { url: 'https://rstrcoffee.com/cdn/shop/files/rn-image_picker_lib_temp_58687804-449e-46d2-bdb7-7eb2032d40c7.png?v=1775809961&width=600', dest: 'public/images/decaf-sleepy-dreams.png' },
  { url: 'https://rstrcoffee.com/cdn/shop/files/RSTR_8oz_Paper_Cup.png?v=1775236799&width=600', dest: 'public/images/paper-cup.png' },
  // Best Sellers
  { url: 'https://rstrcoffee.com/cdn/shop/files/TIRAMISU_CRISIS_4.png?v=1775811557&width=600', dest: 'public/images/tiramisu-crisis-2.png' },
  { url: 'https://rstrcoffee.com/cdn/shop/files/AFRICAN_BEAUTY_2.png?v=1775730620&width=600', dest: 'public/images/sleepyhead.png' },
  { url: 'https://rstrcoffee.com/cdn/shop/files/AFRICAN_BEAUTY_10.png?v=1775733924&width=600', dest: 'public/images/mr-rum-raisin.png' },
  { url: 'https://rstrcoffee.com/cdn/shop/files/AFRICANBEAUTY_13.png?v=1775735403&width=600', dest: 'public/images/cafeina.png' },
  { url: 'https://rstrcoffee.com/cdn/shop/files/AFRICAN_BEAUTY_12.png?v=1775734356&width=600', dest: 'public/images/honduras-whiskey.png' },
  { url: 'https://rstrcoffee.com/cdn/shop/files/TIRAMISU_CRISIS_2.png?v=1775810130&width=600', dest: 'public/images/milkman.png' },
  // Out of Stock
  { url: 'https://rstrcoffee.com/cdn/shop/files/AFRICAN_BEAUTY.png?v=1775728219&width=600', dest: 'public/images/african-beauty.png' },
  { url: 'https://rstrcoffee.com/cdn/shop/files/AFRICAN_BEAUTY_1.png?v=1775730032&width=600', dest: 'public/images/awesome-berry.png' },
  { url: 'https://rstrcoffee.com/cdn/shop/files/AFRICAN_BEAUTY_3.png?v=1775730938&width=600', dest: 'public/images/colombia-supremo.png' },
  { url: 'https://rstrcoffee.com/cdn/shop/files/AFRICAN_BEAUTY_4.png?v=1775731049&width=600', dest: 'public/images/huay-krai.png' },
  { url: 'https://rstrcoffee.com/cdn/shop/files/AFRICAN_BEAUTY_5.png?v=1775731246&width=600', dest: 'public/images/chocolate-for-days.png' },
  { url: 'https://rstrcoffee.com/cdn/shop/files/coffee-capsules.jpg?v=1775730161&width=600', dest: 'public/images/coffee-capsules.jpg' },
  // Brand Partners
  { url: 'https://rstrcoffee.com/cdn/shop/files/AFRICAN_BEAUTY_15.png?v=1775900336&width=300', dest: 'public/images/partner-1.png' },
  { url: 'https://rstrcoffee.com/cdn/shop/files/AFRICAN_BEAUTY_14.png?v=1775900201&width=300', dest: 'public/images/partner-2.png' },
  { url: 'https://rstrcoffee.com/cdn/shop/files/imgi_1_Untitled-1.png?v=1775322492&width=300', dest: 'public/images/partner-3.png' },
  { url: 'https://rstrcoffee.com/cdn/shop/files/imgi_1_Nana_Coffee_Roasters_Logo_200x_0691b261-2b7c-4b9f-a6bd-373040a26fc9.png?v=1775322618&width=300', dest: 'public/images/partner-nana.png' },
  { url: 'https://rstrcoffee.com/cdn/shop/files/imgi_20_SCC_logo_square_1512x_16aeb799-6294-49c5-adcd-b97a0e9e4cbb.png?v=1775228598&width=300', dest: 'public/images/partner-scc.png' },
  { url: 'https://rstrcoffee.com/cdn/shop/files/imgi_3_logo_fathers_male_2-02.png?v=1775228791&width=300', dest: 'public/images/partner-fathers.png' },
  { url: 'https://rstrcoffee.com/cdn/shop/files/imgi_185_68bf8eba634c81842dfe393b_Sarnies_2020_logo-Black.png?v=1775820316&width=300', dest: 'public/images/partner-sarnies.png' },
  // Rocky Road, Zero Regrets
  { url: 'https://rstrcoffee.com/cdn/shop/files/photo_2026-02-05_15-36-18.jpg?v=1775730417&width=600', dest: 'public/images/rocky-road.jpg' },
  { url: 'https://rstrcoffee.com/cdn/shop/files/Black_and_White_Minimalist_Music_Studio_Logo_16.png?v=1775730417&width=600', dest: 'public/images/zero-regrets.png' },
  // Rocky Road packaging
  { url: 'https://rstrcoffee.com/cdn/shop/files/Black_and_White_Minimalist_Music_Studio_Logo_3.png?v=1775732197&width=600', dest: 'public/images/rocky-road-pkg.png' },
];

async function download(url, dest) {
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    if (!res.ok) { console.log(`SKIP ${dest}: ${res.status}`); return; }
    const buf = await res.arrayBuffer();
    const dir = path.dirname(dest);
    if (!existsSync(dir)) await mkdir(dir, { recursive: true });
    await writeFile(dest, Buffer.from(buf));
    console.log(`OK  ${dest}`);
  } catch (e) {
    console.log(`ERR ${dest}: ${e.message}`);
  }
}

// batch 4 at a time
for (let i = 0; i < assets.length; i += 4) {
  await Promise.all(assets.slice(i, i + 4).map(a => download(a.url, a.dest)));
}
console.log('Done.');
