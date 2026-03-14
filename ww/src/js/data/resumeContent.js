/**
 * Resume Content Data
 * Now uses i18n system for all text content
 */
import { t } from '../config/i18n/index.js'
import { en } from '../config/i18n/locales/en.js'

// Helper to get content by section ID
export const getContentBySection = (sectionId) => {
  switch (sectionId) {
    case 0: // About
      return {
        type: 'about',
        title: t('content.about.title'),
        subtitle: t('content.about.subtitle'),
        tagline: t('content.about.tagline'),
        location: {
          city: t('content.about.locationCity'),
          coordinates: t('content.about.locationCoordinates'),
        },
        heroPitch: t('content.about.heroPitch'),
        description: t('content.about.description'),
        stats: [
          {
            value: t('content.about.stats.yearsValue'),
            label: t('content.about.stats.yearsLabel'),
          },
          {
            value: t('content.about.stats.reposValue'),
            label: t('content.about.stats.reposLabel'),
          },
          {
            value: t('content.about.stats.usersValue'),
            label: t('content.about.stats.usersLabel'),
          },
          {
            value: t('content.about.stats.aiValue'),
            label: t('content.about.stats.aiLabel'),
          },
        ],
      }

    case 1: // Experience
      return en.content.experience.jobs.map((job) => ({
        dates: job.dates,
        role: job.role,
        company: job.company,
        description: job.description,
        tags: job.tags.split(', '),
      }))

    case 2: // Projects
      return en.content.projects.items.map((project) => ({
        number: project.number,
        name: project.name,
        organization: project.organization,
        description: project.description,
        tags: project.tags.split(', '),
      }))

    case 3: // Skills
      return {
        intro: t('content.skills.intro'),
        categories: [
          {
            skills: t('content.skills.primary').split(', '),
          },
          {
            skills: t('content.skills.secondary').split(', '),
          },
        ],
      }

    case 4: // Open Source
      return en.content.opensource.projects.map((project) => ({
        badge: project.badge,
        icon: project.icon,
        name: project.name,
        tagline: project.tagline,
        description: project.description,
        stats: [project.stat1, project.stat2, project.stat3],
        tags: project.tags.split(', '),
        link: project.link,
        linkText: project.linkText,
      }))

    case 5: // Contact
      return {
        title: t('content.contact.title'),
        intro: t('content.contact.intro'),
        links: [
          {
            label: t('content.contact.emailLabel'),
            value: t('content.contact.emailValue'),
            href: t('content.contact.emailHref'),
          },
          {
            label: t('content.contact.githubLabel'),
            value: t('content.contact.githubValue'),
            href: t('content.contact.githubHref'),
          },
          {
            label: t('content.contact.linkedinLabel'),
            value: t('content.contact.linkedinValue'),
            href: t('content.contact.linkedinHref'),
          },
          {
            label: t('content.contact.twitterLabel'),
            value: t('content.contact.twitterValue'),
            href: t('content.contact.twitterHref'),
          },
          {
            label: t('content.contact.studioLabel'),
            value: t('content.contact.studioValue'),
            href: t('content.contact.studioHref'),
          },
        ],
      }

    default:
      return null
  }
}

// Summarized versions for billboards
export const getSummarizedContent = (sectionId) => {
  const content = getContentBySection(sectionId)
  if (!content) return null

  switch (sectionId) {
    case 0: // About
      return {
        ...content,
        description: content.description.split('.').slice(0, 2).join('.') + '...',
        stats: content.stats.slice(0, 2), // Show only first 2 stats
      }
    case 1: // Experience
      return content.slice(0, 2) // Show only 2 most recent jobs
    case 2: // Projects
      return content.slice(0, 2) // Show only 2 projects
    case 3: // Skills
      return {
        ...content,
        categories: [{ skills: content.categories[0].skills.slice(0, 6) }], // Show first 6 skills
      }
    case 4: // Open Source
      return content.slice(0, 2) // Show 2 projects
    case 5: // Contact
      return {
        ...content,
        links: content.links.slice(0, 3), // Show first 3 links
      }
    default:
      return null
  }
}
