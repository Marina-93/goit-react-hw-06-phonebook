import Section from './components/Section/Section';
import Form from './components/Form/Form';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import './App.css';

export default function App() {
  return (
      <div className="conteiner">
        <Section title="Phonebook">
          <Form />
        </Section>
        <Section title="Contacts">
          <Filter/>
          <ContactList/>
        </Section>
      </div>
    )
}
