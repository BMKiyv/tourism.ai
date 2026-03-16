import React from 'react'
import { DocListItem } from '@/components/DocListItem'
import { AccessibilityTrigger } from '@/components/AccessibilityTrigger'

export default function EnglishStatisticsPage() {
  return (
    <div className="statistic-wrap header-trigger">
      <AccessibilityTrigger />
      
      <div className="o-container projects-npa-wrap w-container">
        <div className="content-container">
          <h1 id="IAD" className="statistic-heading"><strong className="bold-text-6">Statistics</strong></h1>
          
          <div className="o-tabpane-inf statistic">
            <DocListItem href="https://drive.google.com/file/d/1VbzkC8sG9muJGJjEUCFkzBfAsIVbke9A/view?usp=sharing" label="Report on the results of the survey «Conducting a study of domestic and outbound tourism of Ukrainians»" />
            <DocListItem href="https://drive.google.com/file/d/1rltoXVxPX-ZXAUbFh6MX682sYRP48ZQ2/view?usp=sharing" label="Report on the results of the survey «Conducting quantitative research of inbound tourism at border crossing points» (presentation)" />
            <DocListItem href="https://drive.google.com/file/d/15DyGgDthzl3etR_iuVl3BAMxPFVBhj8E/view?usp=sharing" label="Methodology for forming a sample population for conducting research on domestic and outbound tourism" />
          </div>
          
          <div className="o-tabpane-inf statistic">
            <DocListItem href="/webflow/documents/дослідження_внутрішнього_туристичного_ринку.pdf" label="Survey results regarding travel in Ukraine during the war" />
          </div>
        </div>
      </div>
    </div>
  )
}
