interface ChoiceKaiDisciplines {
  kaiDiscipline: string[];
  masterInWeapon: string | null;
}

interface CharacterGenerationValue {
    "combactSkill": number;
    "endurancePoints": number;
    "kaiDisciplines": ChoiceKaiDisciplines;
    "findInTheRuins": string;
    "goldCoin": number;
  }

  interface LoneWolf {
      combatSkill: number;
      endurancePoints: number;
      kaiDisciplines: string[];
      weaponSkill: string | null
      weapons: string[];
      backpack: {
        items: string[],
        meals: number
      },
      specialItems: string[],
      beltPouch: number
  }

  interface KaiDisciplinesListInfo {
    name: string;
    descr: string;
  }

  interface ListItems {
    name: string;
    isModify: boolean;
  }

  interface ResCombat {
    ls: string | number;
    n: string | number;
  }

export { ChoiceKaiDisciplines, CharacterGenerationValue, LoneWolf, KaiDisciplinesListInfo, ListItems, ResCombat }
