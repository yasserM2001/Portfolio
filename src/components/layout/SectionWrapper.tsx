interface SectionWrapperProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const SectionWrapper = ({
  id,
  title,
  subtitle,
  children,
  className = ""
}: SectionWrapperProps) => {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`min-h-screen py-20 px-4 flex items-center border-b border-muted ${className}`}
    >
      <div className="container max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="mb-16">
          <h2
            id={`${id}-title`}
            className="text-4xl md:text-5xl font-bold mb-3"
          >
            {title}
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-1"></div>
          <div className="w-10 h-1 bg-primary rounded-full mb-6"></div>
          {subtitle && (
            <p className="text-muted-foreground text-lg">
              {subtitle}
            </p>
          )}
        </div>

        {/* Content */}
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;