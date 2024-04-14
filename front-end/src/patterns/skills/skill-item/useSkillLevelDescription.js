import skillLevels from '../skill-section-percentages-definition/skillsLevelDefinitions.json'

export default function useSkillLevelDescription() {
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
