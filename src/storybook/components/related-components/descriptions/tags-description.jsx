import { useMemo } from "react";
import { RelatedComponent } from "../../related-component/related-component";
import Tags from "../../../../components/Tags/Tags";

export const TagsDescription = () => {
  const component = useMemo(() => <Tags label="This is a tag" readOnly />, []);
  return (
    <RelatedComponent
      component={component}
      title="Tag"
      description="Compact elements that represent an input, attribute, or action."
    />
  );
};
