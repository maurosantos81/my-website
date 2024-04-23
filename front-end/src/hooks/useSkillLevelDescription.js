import skillLevelsPt from '@/json/skillsLevelDefinitionsPt.json'
import skillLevelsEn from '@/json/skillsLevelDefinitionsEn.json'
import { useLocale } from 'use-intl'

export default function useSkillLevelDescription() {
  const locale = useLocale()
  const skillLevels = locale === 'pt' ? skillLevelsPt : skillLevelsEn

  const getDescriptions = (level) => {
    const caption = skillLevels.find((desc) => {
      const [maxLevel, minLevel] = desc.level
        .replace('%', '')
        .split(' - ')
        .map(Number)

      return level > minLevel && level <= maxLevel
    })

    return caption?.descriptions
  }

  return { getDescriptions }
}
