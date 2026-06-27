export default function Location() {
    return (
        <div className="w-full h-150">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d612.5056899683796!2d66.9296981766854!3d39.66497763551441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDM5JzU0LjEiTiA2NsKwNTUnNDcuMiJF!5e1!3m2!1sen!2s!4v1781579210584!5m2!1sen!2s"
                className="w-full h-full border-0"
                allowFullScreen={true} 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
}