import {
	DynamicPropertiesDefinition,
	MinecraftEntityTypes,
	world,
  } from "@minecraft/server"
  
  world.events.worldInitialize.subscribe((e) => {
	let def = new DynamicPropertiesDefinition();
	
	def.defineNumber("rpgStrength");
	def.defineString("rpgRole", 16);
	def.defineBoolean("rpgIsHero");
	e.propertyRegistry.registerEntityTypeDynamicProperties(def, MinecraftEntityTypes.skeleton);
  });