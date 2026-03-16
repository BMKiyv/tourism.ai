import React from 'react'
import { DocumentLink } from '@/components/DocumentLink'

export const AnnouncementsTab = () => {
  return (
    <div id="adds" className="o-container anticor w-container">
      <h1 id="IADhtader" className="heading inform-heading">Оголошення про проведення зовнішнього та внутрішнього опитування заінтересованих сторін щодо питань запобігання корупції в діяльності ДАРТ</h1>
      <p className="anticor-p content-blue">
        Відповідно до наказу ДАРТ від 25.11.2024 № 118 «Про проведення оцінювання корупційних ризиків у діяльності Державного агентства розвитку туризму України» розпочато процес розробки Антикорупційної програми Державного агентства розвитку туризму України на 2025-2027 роки.
      </p>
      <p className="anticor-p content-blue">
        Робочою групою з оцінювання корупційних ризиків у діяльності Державного агентства розвитку туризму України розроблено онлайн-форми метою яких є отримання зворотного зв&#x27;язку від зовнішніх та внутрішніх заінтересованих сторін щодо питань запобігання корупції в діяльності ДАРТ.
      </p>
      <p className="anticor-p content-blue">Враховуючи зазначене, запрошуємо пройти коротке анонімне опитування (анкетування): </p>
      <p className="anticor-p content-blue">
        <DocumentLink href="https://forms.gle/cBb8oriWkxYFzoHY6">зовнішніх заінтересованих сторін за посиланням.</DocumentLink>
      </p>
      <p className="anticor-p content-blue">
        <DocumentLink href="https://forms.gle/6rJmABqXPdRkicqW8">внутрішніх заінтересованих сторін (працівників ДАРТ) за посиланням.</DocumentLink>
      </p>
      <p className="anticor-p content-blue">Доступ до онлайн-форм буде відкрито включно до 30.12.2024.<br />‍</p>
    </div>
  )
}
