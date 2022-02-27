import { defineConfig } from "@unocss/vite";
import presetAttributify from "@unocss/preset-attributify";
import presetIcons from "@unocss/preset-icons";
import { presetMini } from "@unocss/preset-mini";
import presetTypography from "@unocss/preset-typography";
import presetWebFonts from "@unocss/preset-web-fonts";

export default defineConfig({
	presets: [
		presetMini(),
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
