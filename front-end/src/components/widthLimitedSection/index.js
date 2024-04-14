export default function WidthLimitedSection({
  children,
  divClassName,
  ...props
}) {
  return (
    <section {...props}>
      <div className={`limit-width ${divClassName}`}>{children}</div>
    </section>
  )
}
