import { defineConfig } from "@unocss/vite";
import presetAttributify from "@unocss/preset-attributify";
import presetIcons from "@unocss/preset-icons";
import { presetUno } from "@unocss/preset-uno";
import presetTypography from "@unocss/preset-typography";
import presetWebFonts from "@unocss/preset-web-fonts";

export default defineConfig({
	presets: [
		// @ts-ignore
		presetUno(),
		// @ts-ignore
		presetIcons(),
		// @ts-ignore
		presetTypography(),
		// @ts-ignore
		presetAttributify(),
		// @ts-ignore
		presetWebFonts(),
	],
});
