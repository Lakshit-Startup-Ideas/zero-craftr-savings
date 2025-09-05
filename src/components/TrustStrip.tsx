const TrustStrip = () => {
  return (
    <div className="bg-mint-soft border-b border-primary/10">
      <div className="container py-3">
        <div className="flex items-center justify-center text-center">
          <p className="text-sm text-slate-dark font-medium">
            Trusted by small & mid-size manufacturers — limited design partner seats
          </p>
        </div>
        {/* Partner logos placeholder */}
        <div className="flex items-center justify-center mt-2 space-x-6 opacity-60">
          <div className="h-8 w-20 bg-muted rounded flex items-center justify-center text-xs text-muted-foreground">
            Partner 1
          </div>
          <div className="h-8 w-20 bg-muted rounded flex items-center justify-center text-xs text-muted-foreground">
            Partner 2
          </div>
          <div className="h-8 w-20 bg-muted rounded flex items-center justify-center text-xs text-muted-foreground">
            Partner 3
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustStrip;