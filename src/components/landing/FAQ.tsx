import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const FAQ = () => {
  return (
    <>
      <h2 className='text-3xl'>
        Frequently Asked Questions <i className='fa-solid fa-question'></i>
      </h2>
      <div className='px-10 py-5'>
        <Accordion type='single' collapsible className='w-full'>
          <AccordionItem value='item-1'>
            <AccordionTrigger>Etiam vehicula consectetur urna at vehicula. Curabitur accumsan eleifend nisl</AccordionTrigger>
            <AccordionContent>
              Etiam vehicula consectetur urna at vehicula. Curabitur accumsan eleifend nisl, in vestibulum tortor tristique quis. Nam
              eget dui et nunc rhoncus interdum a a urna. Mauris consequat sapien at porta ullamcorper.Quisque vehicula massa non
              ullamcorper elementum.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-2'>
            <AccordionTrigger>Etiam vehicula consectetur urna at vehicula. Curabitur accumsan eleifend nisl</AccordionTrigger>
            <AccordionContent>
              Etiam vehicula consectetur urna at vehicula. Curabitur accumsan eleifend nisl, in vestibulum tortor tristique quis. Nam
              eget dui et nunc rhoncus interdum a a urna. Mauris consequat sapien at porta ullamcorper.Quisque vehicula massa non
              ullamcorper elementum.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-3'>
            <AccordionTrigger>Etiam vehicula consectetur urna at vehicula?</AccordionTrigger>
            <AccordionContent>
              Etiam vehicula consectetur urna at vehicula. Curabitur accumsan eleifend nisl, in vestibulum tortor tristique quis. Nam
              eget dui et nunc rhoncus interdum a a urna. Mauris consequat sapien at porta ullamcorper.Quisque vehicula massa non Etiam
              vehicula consectetur urna at vehicula. Curabitur accumsan eleifend nisl, in vestibulum tortor tristique quis. Nam eget
              dui et nunc rhoncus interdum a a urna. Mauris consequat sapien at porta ullamcorper.Quisque vehicula massa non
              ullamcorper elementum.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default FAQ;
